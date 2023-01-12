const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let verses = [
    'Jeremias 3:18: Naqueles dias a casa de Judá se unirá à casa de Israel, e juntos virão de uma terra do norte para a terra que dei a seus antepassados ​​como herança.',
    'João 8:29: "Aquele que me enviou está comigo; ele não me deixou sozinho, pois sempre faço o que lhe agrada."',
    'Salmos 91:14: "Porque eles me amam", diz o Senhor, "eu os resgatarei; os protegerei, pois eles reconhecem o meu nome".',
    'Romanos 15:18: Não me aventurarei a falar de nada, exceto o que Cristo realizou através de mim ao levar os gentios a obedecer a Deus pelo que eu disse e fiz.',
    'Jeremias 17:19: Isto é o que o SENHOR me disse: "Vá e fique na porta do povo, por onde os reis de Judá entram e saem; fique também em todas as outras portas de Jerusalém."',
    'Provérbios 27:12: O prudente vê o perigo e se refugia, mas o simples segue em frente e paga o preço.',
    'Salmos 86:11 Ensina-me o teu caminho, SENHOR, para que eu possa confiar na tua fidelidade; dá-me um coração indiviso, para que eu tema o teu nome.',
    'Isaías 27:1 Naquele dia, o SENHOR punirá com sua espada – sua feroz, grande e poderosa espada – Leviatã, a serpente que desliza, Leviatã, a serpente enrolada; ele matará o monstro do mar.',
];

btnTry.addEventListener('click', CreateVerse)
btnReset.addEventListener('click', function () {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
})

function CreateVerse(event){
    event.preventDefault()

    let verse = verses[
        Math.floor(Math.random() * 
        verses.length)
    ]

    document.querySelector('.screen2 #Create-Verse').textContent=verse;

    screen1.classList.add('hide')
    screen2.classList.remove('hide')
}
