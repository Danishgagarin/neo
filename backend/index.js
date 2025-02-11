const express = require('express');
const cors = require('cors');
const app = express();

const User=require("./models/user")

app.use(cors());
require("./connection");

app.use(express.json());

const ProductModel = require("./models/product");

const jwt = require('jsonwebtoken');

const SECRET_KEY='ictgroup7'

app.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send('User already exists');
        alert("User already Exist")
      }
  
      
      const newUser = new User({ name, email, password, role });
      await newUser.save();
  
      res.status(201).send('User registered successfully');
      alert("User registered successfully")
    } catch (err) {
      res.status(500).send('Error registering user: ' + err.message);
    }
  });

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: "User not found" });
        alert("user not found")
    }


    if (password !== user.password) {
        return res.json({ message: "Wrong password" });
    }


    const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    return res.json({ message: "Login successful", token,role:user.role });
    alert("login successfull")

    
});

app.get('/', (req, res) => {
    res.send("Welcome to the Product API!");
});

app.get('/trial', (req, res) => {
    res.send("Trial route working!");
});

app.post('/add', async (req, res) => {
    try {
        await ProductModel(req.body).save();
        res.send({ message: "Product Added Successfully" });
    } catch (error) {
        console.error("Error while adding product:", error);
        res.status(500).send({ message: "Error while adding product" });
    }
});

app.get('/view', async (req, res) => {
    try {
        const products = await ProductModel.find();
        const formattedProducts = products.map((product) => ({
            _id: product._id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            rating: product.rating,
            __v: product.__v,
        }));
        res.send(formattedProducts);
    } catch (error) {
        console.error("Error while fetching products:", error);
        res.status(500).send({ message: "Error while fetching products" });
    }
});

app.delete('/remove/:id', async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id);
        res.send({ message: "Product Deleted Successfully" });
    } catch (error) {
        console.error("Error while deleting product:", error);
        res.status(500).send({ message: "Error while deleting product" });
    }
});

app.put('/update/:id', async (req, res) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send({ message: "Product Updated Successfully", updatedProduct });
    } catch (error) {
        console.error("Error while updating product:", error);
        res.status(500).send({ message: "Error while updating product" });
    }
});

app.listen(8012, () => {
    console.log("The server is running on port 8012");
});
