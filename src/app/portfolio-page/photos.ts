export let photos: Array<Photography> = [];

var options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };

export class Photography {
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

photos.push(new Photography("Floral queen", new Date(2020, 8, 1), "Vienna, Austria", "portrait", "../../assets/img/portfolio/photo (1).jpg"));
photos.push(new Photography("The elements", new Date(2020, 8, 1), "Ramsau am Dachstein, Austria", "landscape", "../../assets/img/portfolio/photo (2).jpg"));
photos.push(new Photography("On the fly", new Date(2020, 8, 1), "Wienerwald, Austria", "animals", "../../assets/img/portfolio/photo (3).jpg"));
photos.push(new Photography("Silence", new Date(2020, 8, 1), "Bled, Slovenia", "landscape", "../../assets/img/portfolio/photo (4).jpg"));
photos.push(new Photography("The Renessaince of Bread", new Date(2020, 8, 1), "Vienna, Austria", "stills", "../../assets/img/portfolio/photo (5).jpg"));
photos.push(new Photography("Wake me up", new Date(2020, 8, 1), "Vienna, Austria", "stills", "../../assets/img/portfolio/photo (6).jpg"));
photos.push(new Photography("Doubt", new Date(2020, 8, 1), "Vienna, Austria", "animals", "../../assets/img/portfolio/photo (7).jpg"));
photos.push(new Photography("Confrontation", new Date(2020, 8, 1), "Safari, Africa", "animals", "../../assets/img/portfolio/photo (8).jpg"));
photos.push(new Photography("The big suspicion", new Date(2020, 8, 1), "Wienerwald, Austria", "animals", "../../assets/img/portfolio/photo (9).jpg"));
photos.push(new Photography("White", new Date(2020, 8, 1), "Village, Austria", "landscape", "../../assets/img/portfolio/photo (10).jpg"));
photos.push(new Photography("Color my life", new Date(2020, 8, 1), "Colors festival, Austria", "portrait", "../../assets/img/portfolio/photo (11).jpg"));
photos.push(new Photography("Floral queen 2", new Date(2020, 8, 1), "Vienna, Austria", "portrait", "../../assets/img/portfolio/photo (12).jpg"));
photos.push(new Photography("First world problems", new Date(2020, 8, 1), "Vienna, Austria", "portrait", "../../assets/img/portfolio/photo (13).jpg"));
photos.push(new Photography("The bird", new Date(2020, 8, 1), "Vienna, Austria", "animals", "../../assets/img/portfolio/photo (14).jpg"));
photos.push(new Photography("Morning", new Date(2020, 8, 1), "Vienna, Austria", "landscape", "../../assets/img/portfolio/photo (15).jpg"));
photos.push(new Photography("Morning fog", new Date(2020, 8, 1), "Vienna, Austria", "landscape", "../../assets/img/portfolio/photo (16).jpg"));
photos.push(new Photography("Droplets", new Date(2020, 8, 1), "Vienna, Austria", "landscape", "../../assets/img/portfolio/photo (17).jpg"));
photos.push(new Photography("Path", new Date(2020, 8, 1), "Vienna, Austria", "landscape", "../../assets/img/portfolio/photo (18).jpg"));
photos.push(new Photography("Death", new Date(2020, 8, 1), "Vienna, Austria", "stills", "../../assets/img/portfolio/photo (19).jpg"));
photos.push(new Photography("Sunshine", new Date(2020, 8, 1), "Vienna, Austria", "landscape", "../../assets/img/portfolio/photo (20).jpg"));
photos.push(new Photography("Swimming", new Date(2020, 8, 1), "Vienna, Austria", "animals", "../../assets/img/portfolio/photo (21).jpg"));
photos.push(new Photography("Eat some fruit", new Date(2020, 8, 1), "Vienna, Austria", "stills", "../../assets/img/portfolio/photo (22).jpg"));
photos.push(new Photography("Sun VS Cloud", new Date(2020, 8, 1), "Vienna, Austria", "landscape", "../../assets/img/portfolio/photo (23).jpg"));
photos.push(new Photography("Fairy Forest", new Date(2020, 8, 1), "Vienna, Austria", "landscape", "../../assets/img/portfolio/photo (24).jpg"));
photos.push(new Photography("Eat some vegetables", new Date(2020, 8, 1), "Vienna, Austria", "stills", "../../assets/img/portfolio/photo (25).jpg"));




