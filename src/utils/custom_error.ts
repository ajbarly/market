export class CustomError {
    code: number;
    title: string;
    text: string;

    constructor(code: number, title: string, text: string) {
        this.code = code;
        this.title = title;
        this.text = text;
    }
}