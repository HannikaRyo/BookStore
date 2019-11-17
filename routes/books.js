const {
  Router
} = require("express");
const Book = require("../model/Book");
const router = Router();

router.get("/", async (req, res) => {
  const books = await Book.find();

  res.render("index", {
    title: "BookStore",
    isIndex: true,
    books
  });
});

router.get("/adminlist", async (req, res) => {
  const books = await Book.find();
  res.render("list_book", {
    title: "BookList",
    isBookList: true,
    books
  });
});

router.get("/order", (req, res) => {
  res.render("order", {
    title: "Order",
    isOrder: true
  });
});

router.get("/delivery", (req, res) => {
  res.render("delivery", {
    title: "Delivery",
    isDelivery: true
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    isContact: true
  });
});

router.get("/basket", (req, res) => {
  res.render("basket", {
    title: "Your basket",
    isBasket: true
  });
});

router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create book",
    isBasket: false
  });
});

router.post("/createBook", async (req, res) => {
  console.log("post-body: ", req.body);

  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    typeBook: req.body.typeBook,
    price: parseFloat(req.body.price),
    format: req.body.format,
    image: req.body.image,
    description: req.body.description,
    updated: req.body.updated,
    //genre: req.body.genre,
    //publisher: req.body.publisher
  });
  await book.save((err) => {
    if (err) return console.log('error with save: ', err);
  });
  res.redirect("/");
});

router.get('/update/:_id', async (req, res) => {
  Book.getBookById(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
})


router.put("/update:_id", async (req, res) => {
  console.log("put-detail body", req.body);
  var id = req.params._id;
  //const book = await Book.findById(req.body.id);
  var query = {
    _id: id
  };
  const update = {
    title: req.body.title,
    author: req.body.author,
    typeBook: req.body.typeBook,
    price: parseFloat(req.body.price),
    format: req.body.format,
    image: req.body.image,
    description: req.body.description,
    updated: req.body.updated,
    //genre: req.body.genre,
    //publisher: req.body.publisher
  };
  await Book.findOneAndUpdate(query, update, {}, function (err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  });
  // await book.save((err) => {
  //   if (err) return console.log('error with save: ', err);
  // });
  res.redirect("/");
})

module.exports = router;