namespace java com.frank0631.nidhog.book

enum BookFormat {
    ELECTRONIC,
    HARDCOVER,
    PAPERBACK
}

struct Book {
    10:required string      author
    20:required string      title
    30:required string      isbn10
    40:required string      isbn13
    50:required BookFormat  format
    60:required i64         publishDate
    70:optional string      language
    80:optional i64         pages
    90:optional i64         edition
}