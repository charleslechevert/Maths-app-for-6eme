BEGIN;

--
-- Déchargement des données de la table "users"
--

--
-- Déchargement des données de la table "levels"
--

INSERT INTO "chapter" ("position", "name") VALUES
(1, 'Chapitre 1 - une île décimale'),
(2, 'Chapitre 2 - Voyage vers de nouvelles mers'),
(3, 'Chapitre 3 - Le secret de la jungle');

INSERT INTO "game" ("position","title","description","img","chapter_id") VALUES
(1,"De grosses boîtes...","Sélectionne la boite la plus lourde afin de récolter un maximum de denrées alimentaires!","ch1_g1/box2.png",1),
(2,"Des zéros pas si inutiles...","Trouve les différents zéros inutiles et engrange un maximum de points!","ch1_g2/coin.png",1),
(3,"Des perroquets turbulents...","Place les perroquets sur les bons barreaux de l'échelle afin de calmer leur puissantes ardeurs! <br> AIDE : tu peux voir l'échelle comme une demi-droite graduée! Clique d'abord sur le perroquet que tu souhaites déplacer puis sur le bon barreau correspondant.","ch1_g3/parrot4.png",1),
(4,"Au marché!","Distribue la bonne quantité de chocolat aux différents clients!","ch1_g4/square.jpg",1),
(1,"Mettons les voiles...","De retour en mer, pilote le bateau tout en résolvant des additions. Pour gagner des points, il suffit de viser un bateau ami (son nombre correspond au résultat de l'addition). Si tu te trompes, ton bateau sera détruit par un bateau ennemi. <br> AIDE : tu peux piloter le bateau en tapotant ou cliquant sur l'écran.","ch2_g1/boat.png",2),
(1,"Les trésors de la jungle...","Trouve le reste de la division euclidienne entre le nombre de fruits (LE DIVIDENDE) et la longueur du carré sur lequel sont disposés les fruits (LE DIVISEUR) afin de récupérer un maximum de fruits! <br>AIDE: Tu peux déplacer les fruits en les faisant glisser à l'aide de ton doigt ou ta souris. Cela peut être utile afin de former des lots de fruits.","ch3_g1/fruit5.png",3),
(2,"Saut de multiples...","Aide le capitaine à traverser le cours d'eau en sautant sur les bons rondins de bois. Pour cela il va falloir que tu trouves les multiples des nombres que l'on te donne!","ch3_g2/log.png",3),
(3,"A deux pas du temple...","Grâce à ta conaissance sur les multiples, aide le capitaine à traverser le marécage qui mène au temple perdu...","ch3_g3/vortex2.png",3);


COMMIT;