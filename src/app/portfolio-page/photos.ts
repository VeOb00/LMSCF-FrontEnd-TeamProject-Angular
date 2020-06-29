export let photos: Array<Photography> = [];
var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };

class Photography {
    image: string;
    caption: string;
    dateTaken: string;
    placeTaken: string;
    type: string;

    constructor(caption: string, dateTaken: Date, placeTaken: string, type: string, image: string) {
        this.image = image;
        this.caption = caption;
        this.dateTaken = dateTaken.toLocaleString("en-DE", options);
        this.placeTaken = placeTaken;
        this.type = type;
    }

    display() {}
}

photos.push(new Photography("The image", new Date(2020, 8, 1), "Vienna, Austria", "portrait", "../../assets/img/portfolio/photo (1).jpg"));
photos.push(new Photography("The image", new Date(2020, 8, 1), "Vienna, Austria", "portrait", "../../assets/img/portfolio/photo (2).jpg"));
photos.push(new Photography("The image", new Date(2020, 8, 1), "Vienna, Austria", "portrait", "../../assets/img/portfolio/photo (3).jpg"));
photos.push(new Photography("The image", new Date(2020, 8, 1), "Vienna, Austria", "portrait", "../../assets/img/portfolio/photo (4).jpg"));
photos.push(new Photography("The image", new Date(2020, 8, 1), "Vienna, Austria", "portrait", "../../assets/img/portfolio/photo (5).jpg"));
photos.push(new Photography("The image", new Date(2020, 8, 1), "Vienna, Austria", "portrait", "../../assets/img/portfolio/photo (6).jpg"));