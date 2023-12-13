const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

//cors
app.use(cors());
// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Files will be stored in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    cb(null, `file_${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: storage });

// Handle file upload
app.post('/upload', upload.array('files', 10), (req, res) => {
  try {
    // Access uploaded files in req.files
    if (!req.files) {
      return res.status(400).send('No files were uploaded.');
    }

    // Extract file names with extensions from req.files and send back to frontend
    const fileNamesWithExtensions = req.files.map((file) => file.originalname);

    res.json({ fileNamesWithExtensions: fileNamesWithExtensions });
  } catch (error) {
    res.json(error);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
