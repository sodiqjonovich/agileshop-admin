export class CompanyViewModel
{
    id: Number;
    name: String;
    phoneNumber: String;
    description: String;
    imagePath: String;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.id = 0;
        this.name = "";
        this.phoneNumber = "";
        this.description="";
        this.imagePath = "";
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}