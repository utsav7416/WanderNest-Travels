const router = require("express").Router();
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const Listing = require("../models/Listing");
const User = require("../models/User");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wandernest_uploads",
    allowed_formats: ["jpg", "png", "webp", "jpeg"],
  },
});

const upload = multer({ storage });

router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    const {
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      country,
      guestCount,
      bedroomCount,
      bathroomCount,
      amenities,
      description,
      highlightDesc,
      price,
    } = req.body;

    const listingPhotos = req.files;

    if (!listingPhotos || listingPhotos.length === 0) {
      return res.status(400).send("No files uploaded.");
    }

    const listingPhotoPaths = listingPhotos.map((file) => file.path);

    const newListing = new Listing({
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      country,
      guestCount,
      bedroomCount,
      bathroomCount,
      amenities,
      listingPhotoPaths,
      description,
      highlightDesc,
      price,
    });

    await newListing.save();

    res.status(200).json(newListing);
  } catch (err) {
    res.status(409).json({ message: "Fail to create Listing", error: err.message });
    console.log(err);
  }
});

router.delete("/delete/:listingId", async (req, res) => {
    try {
        const { listingId } = req.params;

        const listing = await Listing.findById(listingId);

        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }

        if (listing.listingPhotoPaths && listing.listingPhotoPaths.length > 0) {
            for (const photoUrl of listing.listingPhotoPaths) {
                const parts = photoUrl.split('/');
                const filenameWithExtension = parts[parts.length - 1];
                const versionAndFolder = parts[parts.length - 2];
                const folderName = versionAndFolder.includes('/') ? versionAndFolder.split('/')[1] : versionAndFolder;

                const publicId = `${folderName}/${filenameWithExtension.split('.')[0]}`;

                await cloudinary.uploader.destroy(publicId);
                console.log(`Deleted image from Cloudinary: ${publicId}`);
            }
        }

        await Listing.findByIdAndDelete(listingId);

        res.status(200).json({ message: "Listing deleted successfully" });
    } catch (err) {
        console.error("Error deleting listing:", err);
        res.status(500).json({ message: "Failed to delete listing and/or images", error: err.message });
    }
});

router.get("/", async (req, res) => {
  const qCategory = req.query.category;

  try {
    let listings;
    if (qCategory) {
      listings = await Listing.find({ category: qCategory }).populate("creator");
    } else {
      listings = await Listing.find().populate("creator");
    }

    res.status(200).json(listings);
  } catch (err) {
    res.status(404).json({ message: "Fail to fetch listings", error: err.message });
    console.log(err);
  }
});

router.get("/search/:search", async (req, res) => {
  const { search } = req.params;

  try {
    let listings = [];

    if (search === "all") {
      listings = await Listing.find().populate("creator");
    } else {
      listings = await Listing.find({
        $or: [
          { category: { $regex: search, $options: "i" } },
          { title: { $regex: search, $options: "i" } },
        ],
      }).populate("creator");
    }

    res.status(200).json(listings);
  } catch (err) {
    res.status(404).json({ message: "Fail to fetch listings", error: err.message });
    console.log(err);
  }
});

router.get("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId).populate("creator");
    res.status(202).json(listing);
  } catch (err) {
    res.status(404).json({ message: "Listing can not found!", error: err.message });
  }
});

module.exports = router;