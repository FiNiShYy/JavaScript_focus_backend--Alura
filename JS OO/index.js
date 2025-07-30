import User from "./User.js";
import Admin from "./Admin.js";
import Docent from "./Docente.js";

const novoUser = new User("Kauã", "k@k.com", "2024-01-01");
// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
// const novoDocente = new Docent("Mariana", "m@m.com", "2024-01-01");

const dadosFicticios = User.exibirInfosGenericas("Adriano", "c@c.com");

console.log(novoUser.exibirInfos())
// console.log(novoAdmin.exibirInfos())
// console.log(novoDocente.exibirInfos())
console.log(dadosFicticios)
