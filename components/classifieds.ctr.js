(function() {
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope) {
            
            $scope.classified = [
                {
                    "id":"1",
                    "title": "First Item",
                    "price": 1000000,
                    "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illo suscipit non voluptatem numquam explicabo fugit sed nostrum, quo veritatis, sunt nesciunt sit nobis obcaecati, cum nulla fugiat. Ipsum, error?",
                    "posted":"2015-10-24",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-55555",
                        "email":"johndoe@gmail.com"
                },
                    "categorie": [
                        "Vehicules",
                        "Parts and Accessories"
                ],
                    "image":"https://www.classicride.fr/cache/images/product/0de57eb0de304be461ef2d4a85d5a9ff-stylmartin-iron-black-baskets-moto-vintage-chaussures-cafe-racer-7411.jpg",
                    "views":365
                },
                {
                    "id":"2",
                    "title": "Second Item",
                    "price": 10000,
                    "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illo suscipit non voluptatem numquam explicabo fugit sed nostrum, quo veritatis, sunt nesciunt sit nobis obcaecati, cum nulla fugiat. Ipsum, error?",
                    "posted":"2014-10-24",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-55555",
                        "email":"johndoe@gmail.com"
                },
                    "categorie": [
                        "Vehicules",
                        "Parts and Accessories"
                ],
                    "image": "https://wegoboard.com/70-thickbox_default/chaussure-led-blanche.jpg",
                    "views":365
                },
                {
                    "id":"3",
                    "title": "Three Item",
                    "price": 700,
                    "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illo suscipit non voluptatem numquam explicabo fugit sed nostrum, quo veritatis, sunt nesciunt sit nobis obcaecati, cum nulla fugiat. Ipsum, error?",
                    "posted":"2016-10-24",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-55555",
                        "email":"johndoe@gmail.com"
                },
                    "categorie": [
                        "Vehicules",
                        "Parts and Accessories"
                ],
                    "image": "http://www.impur.fr/productimg/Nike-Classic-Cortez/Classic-Cortez-Femme/Nike-Cortez-Orange-Rouge-Blanc-Orange-Impur005.jpg",
                    "views":365
                },
                {
                    "id":"4",
                    "title": "Four Item",
                    "price": 9000,
                    "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illo suscipit non voluptatem numquam explicabo fugit sed nostrum, quo veritatis, sunt nesciunt sit nobis obcaecati, cum nulla fugiat. Ipsum, error?",
                    "posted":"2017-10-24",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-55555",
                        "email":"johndoe@gmail.com"
                },
                    "categorie": [
                        "Vehicules",
                        "Parts and Accessories"
                ],
                    "image": "http://www.dec-art.fr/images/dsa98dswtw/France-chaussures-zalando-besson-chaussures-en-ligne-chaussures-pour-femme-adidas-ZKQ4FG92DJ.jpg",
                    "views":365
                },
                {
                    "id":"5",
                    "title": "Five Item",
                    "price": 80000,
                    "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illo suscipit non voluptatem numquam explicabo fugit sed nostrum, quo veritatis, sunt nesciunt sit nobis obcaecati, cum nulla fugiat. Ipsum, error?",
                    "posted":"2013-10-24",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-55555",
                        "email":"johndoe@gmail.com"
                },
                    "categorie": [
                        "Vehicules",
                        "Parts and Accessories"
                ],
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolK_hI_p3voJ7goTp8YiA-WOuULyM7m0w4tLG8ELgaJOkmwayhA",
                    "views":365
                },
                {
                    "id":"6",
                    "title": "six Item",
                    "price": 1000000,
                    "description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum illo suscipit non voluptatem numquam explicabo fugit sed nostrum, quo veritatis, sunt nesciunt sit nobis obcaecati, cum nulla fugiat. Ipsum, error?",
                    "posted":"2010-10-24",
                    "contact": {
                        "name":"John Doe",
                        "phone":"(555) 555-55555",
                        "email":"johndoe@gmail.com"
                },
                    "categorie": [
                        "Vehicules",
                        "Parts and Accessories"
                ],
                    "image": "http://www.lentillescouleurs.fr/images/Chaussures/basket-adidas-garcon-chaussures-nike-chaussur-adidas-81064928.jpg",
                    "views":365
                }
            ];
        });

})();