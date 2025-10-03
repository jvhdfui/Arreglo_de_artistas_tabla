import{Router} from "express"
const router = Router()

var artistas = ["Bethoven", "Van Gog", "Mozart", "Picasso"]

router.get("/", function(req, res){
	res.render("home", {artistas})
})

router.get("/info/:c", function(req, res){
	var c = req.params.c //c corresponde a lo que se va a recibir
	console.log(c) //terminal
	res.render("información",{c})
})

router.get("/contactanos", function(req, res){
	res.render("contactanos")
})

router.post("/contactanos", function(req, res){
	var nombre = req.body.nombre
	var edad = req.body.edad
	console.log("Nombre: " + nombre + " Edad: " + edad)
	res.render("respuesta", {nombre, edad}) //mandar datos {nombre, edad}
})
export default router