// Les objets dans la vie reel ont des propriete et des actions qu'ils peuvent fontVariantEastAsian: 

// Literal object(Objet litteraire)

const personne = {
    nom: 'Janot',
    email: 'janot395@gmail.com',
    age: 38,
    taille: 1.90,
    couleur: 'Noire',
    blogs: ['les bases du js', 'les bases de reactJs', 'les bases du html & css']
};

console.log(personne);
console.log(personne.blogs);

personne.nom = 'kemayou';
personne.age = 30;

personne.blogs[0] = 'les bases du Javascript';
console.log(personne);
console.log(personne.blogs[1]);

console.log(personne.blogs);

const key = 'taille';
console.log(personne[key]);

// Methods dans notre object

const personne1 = {
    nom: 'Janot',
    email: 'janot395@gmail.com',
    age: 38,
    taille: 1.90,
    couleur: 'Noire',
    blogs: [
        'les bases du js', 
        'les bases de reactJs', 
        'les bases du html & css'
    ],
    login: function(){
        console.log('Utilisateur connecter');
    },
    logout: function(){
        console.log('Utilisateur deconnecter');
    },
    afficherBlogs: function (){
        this.blogs.forEach( (blog) => {
            console.log(blog);
        })
    }
};


console.log();
personne1.login();
personne1.logout();
personne1.afficherBlogs();


// Un array des objets

const blogs = [
    {
        id: 1,
        titre: 'les bases du JS',
        contenu: 'tout savoir sur les bases du JS',
        likes: 12
    },
    {
        id: 1,
        titre: 'les bases du ReactJS',
        contenu: 'tout savoir sur les bases du ReactJS',
        likes: 20
    },
    {
        id: 1,
        titre: 'les bases du du html & css',
        contenu: 'tout savoir sur les bases du du html & css',
        likes: 18
    },
];

blogs.forEach( (blog) => {
    console.log(`${blog.id} - ${blog.titre} - ${blog.contenu} et ${blog.likes} ont aimer.`);
})