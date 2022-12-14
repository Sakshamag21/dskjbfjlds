package router

import (
	"github.com/bmdavis419/fiber-mongo-example/common"
	"github.com/bmdavis419/fiber-mongo-example/models"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func AddBookGroup(app *fiber.App) {
	bookGroup := app.Group("/")

	bookGroup.Get("/", getBooks)
	bookGroup.Get("/getuser/:email", getBook)
	bookGroup.Post("/register1", createBook)
	bookGroup.Put("/updateuser/:email", updateBook)
	bookGroup.Delete("/:id", deleteBook)
}

func getBooks(c *fiber.Ctx) error {
	coll := common.GetDBCollection("books")

	// find all books
	books := make([]models.Book, 0)
	cursor, err := coll.Find(c.Context(), bson.M{})
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	// iterate over the cursor
	for cursor.Next(c.Context()) {
		book := models.Book{}
		err := cursor.Decode(&book)
		if err != nil {
			return c.Status(500).JSON(fiber.Map{
				"error": err.Error(),
			})
		}
		books = append(books, book)
	}

	return c.Status(200).JSON(fiber.Map{"data": books})
}

func getBook(c *fiber.Ctx) error {
	coll := common.GetDBCollection("books")

	
	email := c.Params("email")
	if email == "" {
		return c.Status(400).JSON(fiber.Map{
			"error": "email is required",
		})
	}
	

	book := models.Book{}

	err := coll.FindOne(c.Context(), bson.M{"email": email}).Decode(&book)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(200).JSON(fiber.Map{"data": book})
}


type candidate struct {
	Key  int `json:"key" bson:"key"`
	Course string `json:"course" bson:"course"`
	Grade   string `json:"grade" bson:"grade"`
	Credits  int `json:"credits" bson:"credits"`
	Credits_received float32 `json:"credits_received" bson:"credits_received"`
	Is_repeated   bool `json:"is_repeated" bson:"is_repeated"`
	Is_sx  bool `json:"is_sx" bson:"is_sx"`   
}

type createDTO struct {
	Email  string `json:"email" bson:"email"`
	UserId string `json:"userid" bson:"userid"`
	Gradesdata  [][]candidate `json:"gradesData" bson:"gradesData"`
}

func createBook(c *fiber.Ctx) error {
	// validate the body
	b := new(createDTO)
	if err := c.BodyParser(b); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Invalid body",
		})
	}

	// create the book
	coll := common.GetDBCollection("books")
	result, err := coll.InsertOne(c.Context(), b)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error":   "Failed to create book",
			"message": err.Error(),
		})
	}

	// return the book
	return c.Status(201).JSON(fiber.Map{
		"result": result,
	})
}

// type updateDTO struct {
// 	Title  string `json:"title,omitempty" bson:"title,omitempty"`
// 	Author string `json:"author,omitempty" bson:"author,omitempty"`
// 	Year   string `json:"year,omitempty" bson:"year,omitempty"`
// 	// Gradesdata  [][3]string `json:"gradesdata" bson:"gradesdata"`
// 	Gradesdatas  [][]candidate `json:"gradesdatas" bson:"gradesdatas"`
// }
type updateDTO struct {
	Email  string `json:"email" bson:"email"`
	UserId string `json:"userid" bson:"userid"`
	Gradesdata  [][]candidate `json:"gradesData" bson:"gradesData"`
}

func updateBook(c *fiber.Ctx) error {
	// validate the body
	b := new(updateDTO)
	if err := c.BodyParser(b); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Invalid body",
		})
	}

	// get the id
	email := c.Params("email")
	if email == "" {
		return c.Status(400).JSON(fiber.Map{
			"error": "email is required",
		})
	}
	// objectId, err := primitive.ObjectIDFromHex(id)
	// if err != nil {
	// 	return c.Status(400).JSON(fiber.Map{
	// 		"error": "invalid id",
	// 	})
	// }

	// update the book
	coll := common.GetDBCollection("books")
	result, err := coll.UpdateOne(c.Context(), bson.M{"email": email}, bson.M{"$set": b})
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error":   "Failed to update book",
			"email":email,
			"message": err.Error(),
		})
	}

	// return the book
	return c.Status(200).JSON(fiber.Map{
		"result": result,
	})
}

func deleteBook(c *fiber.Ctx) error {
	// get the id
	id := c.Params("id")
	if id == "" {
		return c.Status(400).JSON(fiber.Map{
			"error": "id is required",
		})
	}
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "invalid id",
		})
	}

	// delete the book
	coll := common.GetDBCollection("books")
	result, err := coll.DeleteOne(c.Context(), bson.M{"_id": objectId})
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error":   "Failed to delete book",
			"message": err.Error(),
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"result": result,
	})
}
