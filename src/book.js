class manicure{
    constructor(type, options, add){
        this.type = type;
        this.options = options;
        this.add = add;
    }
}

class pedicure{
    constructor(type, options){
        this.type = type;
        this.options = options;
    }
}

class spacombo{
    constructor(type, options){
        this.type = type;
        this.options = options;
    }
}

const manicureServices = [
    {type: "Basic Manicure", description: "Shape Nails, Soak, Cuticle Care, Lotion Massage, Warm Towel", options: ["Regular Polish", "Shellac or Gel", "Chrome", "Ombre", "Dipping Powder"], add: "Soak-Off"},
    {type: "Deluxe Manicure", description: "Shape Nails, Soak, Cuticle Care, Exfoliating Sugar Scrub, Lotion Massage, Warm Towel, Paraffin w/Mittens", options: ["Regular Polish", "Shellac or Gel", "Chrome", "Ombre", "Dipping Powder"], add: "Soak-Off"}
]

const pedicureServices = [
    {type: "Express Pedicure", description: "Shape Nails, Foot Bath", options: ["Regular Polish", "Shellac or Gel"]},
    {type: "Sport Pedicure", description: "Shape Nails, Foot Bath, Cuticle Care", options: ["Regular Polish", "Shellac or Gel"]},
    {type: "Spa Pedicure", description: "Shape Nails, Foot Bath, Cuticle Care, Sole Scrub, Exfoliating Sea Salt Scrub, Lotion Massage, Warm Towel", options: ["Regular Polish", "Shellac or Gel"]},
    {type: "Deluxe Pedicure", description: "Shape Nails, Foot Bath, Cuticle Care, Sole Scrub, Exfoliating Sugar Scrub, Mint Masque w/Warm Towel Wrap, Lotion Massage, Warm Towel, Heel Paraffin Wax", options: ["Regular Polish", "Shellac or Gel"]},
    {type: "Luxury Pedicure", description: "Shape Nails, Foot Bath, Cuticle Care, Callus Treatment, Exfoliating Sugar Scrub, Mint Masque w/Warm Towel Wrap, Oil & Lotion Massage, Warm Towel, Hot Stone Massage, Heel Paraffin Wax", options: ["Regular Polish", "Shellac or Gel"]},
    {type: "Metro Signature Pedicure", description: "Shape Nails, Foot Bath, Cuticle Care, Callus Treatment, Exfoliating Sugar Scrub, Cool Gel Massage, Mint Masque w/Warm Towel Wrap, Oil & Lotion Massage, Warm Towel, Hot stone Massage, Full Paraffin w/Booties", options: ["Regular Polish", "Shellac or Gel"]}

]

const spacomboServices = [
    {type: "Spa Mani & Express Pedi", description: "Combos w/ Regular Polish", options: ["Deluxe Manicure add", "Nail Gel Polish", "Dipping Powder Add", "Chrome Add", "Ombre Add", "Toe Nail Gel Polish"]},
    {type: "Spa Mani & Sport Pedi", description: "Combos w/ Regular Polish", options: ["Deluxe Manicure add", "Nail Gel Polish", "Dipping Powder Add", "Chrome Add", "Ombre Add", "Toe Nail Gel Polish"]},
    {type: "Spa Mani & Spa Pedi", description: "Combos w/ Regular Polish", options: ["Deluxe Manicure add", "Nail Gel Polish", "Dipping Powder Add", "Chrome Add", "Ombre Add", "Toe Nail Gel Polish"]},
    {type: "Spa Mani & Deluxe Pedi", description: "Combos w/ Regular Polish", options: ["Deluxe Manicure add", "Nail Gel Polish", "Dipping Powder Add", "Chrome Add", "Ombre Add", "Toe Nail Gel Polish"]},
    {type: "Spa Mani & Luxury Pedi", description: "Combos w/ Regular Polish", options: ["Deluxe Manicure add", "Nail Gel Polish", "Dipping Powder Add", "Chrome Add", "Ombre Add", "Toe Nail Gel Polish"]},
    {type: "Spa Mani & Metro Signature Pedi",description: "Combos w/ Regular Polish", options: ["Deluxe Manicure add", "Nail Gel Polish", "Dipping Powder Add", "Chrome Add", "Ombre Add", "Toe Nail Gel Polish"]}
]

$(".row-serv").each(function(index){







})