type Genre = "Fiction" | "Novel";

export default interface Book {
    id :number,
    title :string,
    description :string,
    thumbnailImage :string,
    genre : Genre
}