import IMAGES from '../pizzaPictures/index.js';
import pizza_3 from '../pizzaPictures/3_MegaVega.jpg';
import pizza_4 from '../pizzaPictures/4_Texas.jpg';

const pizza = [
	{
	id: 1,
	name: 'Dallas',
	price: 2595,
	picture: IMAGES.pizza_1,
	topping: ['fűszeres paradicsomszósz', 'sonka', 'gomba', 'mozzarella sajt']
	},
	{
	id: 2,
	name: 'Farmer',
	price: 2895,
	picture: IMAGES.pizza_2,
	topping: ['mozzarella', 'csirke', 'kalifornia paprika', 'lilahagyma', 'gomba', 'paradicsomszósz']
	},
     {
	id: 3,
	name: 'MegaVega',
	price:3095,
	picture: {pizza_3},
	topping: ['gomba', 'spenót', 'szines kalifornia paprika', 'kotélparadicsom', 'li/lahagyma', 'Correggio sajt', 'mozzarella golyó']
	},
    {
	id: 4,
	name: 'Texas',
	price: 2895,
	picture: {pizza_4},
	topping: ['BBQ szósz', 'grillezett csikerhús', 'lilahagyma', 'csemegekukorica', 'mozzarella sajt']
	},
	// {
	// id: 5,
	// name: 'Szuprém',
	// price: 2895,
	// picture: ,
	// topping: ['fűszeres paradicsomszóst', 'marhahús']
	// },
	// {
	// id: 6,
	// name: 'Sonkás-kukoricás',
	// price: 4490,
	// picture: ,
	// topping: ['sonka', 'sajt', 'jalapeno', 'fokhagyma']
	// },
	// {
	// id: 7,
	// name: 'Carbonara',
	// price: 2595,
	// picture: ,
	// topping: ['mozzarella', 'bacon', 'sonka', 'fokhagyma', 'szósz']
	// },
	// {
	// id: 8,
	// name: 'Gyros',
	// price: 2895,
	// picture: ,
	// topping: ['fokhagymás szós', 'mozzarella', 'kebab', 'csikre', 'lilahagyma', 'uborka']
	// },
	// {
	// id: 9,
	// name: 'SokSajtos',
	// price: 2895,
	// picture: ,
	// topping: ['fokhagymás szósz', 'coreggio', 'mozzarella', 'cheddar']
	// },
	// {
	// id: 10,
	// name: 'Húsimádó',
	// price: 3095,
	// picture: ,
	// topping: ['fűszeres paradicsomszósz', ' marhahús', 'bacon', 'sonka', 'olaszkolbász', 'mozzarella sajt']
	// },
	// {
	// id: 11,
	// name: 'Magyaros',
	// price: 3095,
	// picture: ,
	// topping: ['fűszeres paradicsomszósz', 'olaszkolbász', 'marhahús', 'jalapeno', 'kalifornia paprika', 'paradicsom', 'lilahagyma', 'mozzarella']
	// },
	// {
	// id: 12,
	// name: 'Margarita',
	// price: 2495,
	// picture: ,
	// topping: ['mozzarella', 'fűszeres paradicsomszósz']
	// },
	// {
	// id: 13,
	// name: 'Haeaii',
	// price: 2595,
	// picture: ,
	// topping: ['fűszeres paradicsomszósz', 'sonka,', 'ananász', 'mozzarella']
	// }
	// {
	// id: ,
	// name: '',
	// price: ,
	// picture: ,
	// topping: []
	// }
	// {
	// id: ,
	// name: '',
	// price: ,
	// picture: ,
	// topping: []
	// }
	// {
	// id: ,
	// name: '',
	// price: ,
	// picture: ,
	// topping: []
	// }
	// {
	// id: ,
	// name: '',
	// price: ,
	// picture: ,
	// topping: []
	// }
]


function Pizza() {
	console.log(Array.isArray(pizza))
	return (
		<div>
			{pizza.map((p) => console.log(p.picture))}
		</div>
	)
}

export default Pizza
