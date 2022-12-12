import { Injectable } from '@angular/core';
import { Food } from '../models/interface';
import { Observable, Subject } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
	providedIn: 'root',
})
export class SocketService {
	orderStatusEvent: Subject<boolean> = new Subject<boolean>();
	constructor() {}
	closingTime: string = '19:00:00';
	openingTime = '07:00:00';
	categories: string[] = [];
	foodArray: Food[] = [
		{
			id: '91fcca31cba046fea468af2c659bcf600',
			body: 'Assorted Jollof',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/assortedJollof.jpeg',
			alt: 'Assorted Jollof',
			price: '100.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf601',
			body: 'Jollof, Charcoal Grilled Chicken And Kelewele',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/jollofwithgrilledchickenandkelewele.jpeg',
			alt: 'Jollof, Charcoal Grilled Chicken And Kelewele',
			price: '65.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf602',
			body: 'Jollof Rice With Grilled Chicken',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/JollofwithCharcoalgrilledchicken.jpeg',
			alt: 'Jollof Rice With Grilled Chicken',
			price: '60.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf603',
			body: 'Jollof Rice With Gizzard',
			image: '',
			alt: 'Jollof Rice With Gizzard',
			price: '65.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf604',
			body: 'Jollof Rice With Beef Kebab',
			image: '',
			alt: 'Jollof Rice With Beef Kebab',
			price: '65.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf605',
			body: 'Jollof Rice With Grilled Pork',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/JollofwithPork.jpeg',
			alt: 'Jollof Rice With Grilled Pork',
			price: '65.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf606',
			body: 'Jollof With Tsofi',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/JollofwithTsofi.jpeg',
			alt: 'Jollof With Tsofi',
			price: '65.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf607',
			body: 'Jollof Rice With Suya Goat Chops',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/Jollofwithsuya%20goatchops.jpeg',
			alt: 'Jollof Rice With Suya Goat Chops',
			price: '65.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf608',
			body: 'Jollof With Spicy Wings',
			image: '',
			alt: 'Jollof With Spicy Wings',
			price: '65.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf609',
			body: 'Beef Jollof',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/Beefjollof.jpeg',
			alt: 'Beef Jollof',
			price: '70.00',
			category: 'Jollof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf610',
			body: 'Shrimp Jollof',
			image: '',
			alt: 'Shrimp Jollof',
			price: '100.00',
			category: 'JolLof Combos',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf611',
			body: 'Shrimp Fried Rice',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/Shrimpfriedrice.jpeg',
			alt: 'Shrimp Fried Rice',
			price: '100.00',
			category: 'Fried Rice Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf612',
			body: 'Beef Fried Rice',
			image: '',
			alt: 'Beef Fried Rice',
			price: '75.00',
			category: 'Fried Rice Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf613',
			body: 'Assorted Meat Fried Rice',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/assortedMeatFriedrice.jpeg',
			alt: 'Assorted Meat Fried Rice',
			price: '85.00',
			category: 'Fried Rice Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf614',
			body: 'Fried Rice And Chicken Wings',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/Friedricewithchickenwings.jpeg',
			alt: 'Fried Rice And Chicken Wings',
			price: '65.00',
			category: 'Fried Rice Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf615',
			body: 'Fried Rice And Tsofi',
			image: '',
			alt: 'Fried Rice And Tsofi',
			price: '65.00',
			category: 'Fried Rice Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf616',
			body: 'Fried Rice And Pork',
			image: '',
			alt: 'Fried Rice And Pork',
			price: '65.00',
			category: 'Fried Rice Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf617',
			body: 'Fried Rice With Chicken',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/Friedricewithchickenwings.jpeg',
			alt: 'Fried Rice With Chicken',
			price: '60.00',
			category: 'Fried Rice Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf618',
			body: 'Kpakpo Chicken Wings With Yam Chips',
			image: '',
			alt: 'Kpakpo Chicken Wings With Yam Chips',
			price: '65.00',
			category: 'Yam Chips Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf619',
			body: 'Yam Chips With Charcoal Grilled Tilapia',
			image: '',
			alt: 'Yam Chips With Charcoal Grilled Tilapia',
			price: '85.00',
			category: 'Yam Chips Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf620',
			body: 'Yam Chips With Tsofi',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/YamchipswithTsofi.jpeg',
			alt: 'Yam Chips With Tsofi',
			price: '65.00',
			category: 'Yam Chips Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf621',
			body: 'Yam Chips With Suya Goat Chops',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/YamchipswithGoatchops.jpeg',
			alt: 'Yam Chips With Suya Goat Chops',
			price: '65.00',
			category: 'Yam Chips Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf622',
			body: 'Charcoal Grilled Pork',
			image: '',
			alt: 'Charcoal Grilled Pork',
			price: '65.00',
			category: 'Yam Chips Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf623',
			body: 'Yam Chips With Suya Snails',
			image: '',
			alt: 'Yam Chips With Suya Snails',
			price: '150.00',
			category: 'Yam Chips Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf624',
			body: 'Yam Chips With Fried Fish',
			image: '',
			alt: 'Yam Chips With Fried Fish',
			price: '65.00',
			category: 'Yam Chips Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf625',
			body: 'Plain Rice With Corned Beef & Egg Stew',
			image: '',
			alt: 'Plain Rice With Corned Beef & Egg Stew',
			price: '60.00',
			category: 'Other Rice Dishes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf626',
			body: 'Plain Rice With Sardine & Egg Stew',
			image: '',
			alt: 'Plain Rice With Sardine & Egg Stew',
			price: '60.00',
			category: 'Other Rice Dishes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf627',
			body: 'Plain Rice With Grilled Chicken & Tomatom Stew',
			image: '',
			alt: 'Plain Rice With Grilled Chicken & Tomatom Stew',
			price: '60.00',
			category: 'Other Rice Dishes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf628',
			body: 'Plain Rice With Beef Kebab And Tomato Stew',
			image: '',
			alt: 'Plain Rice With Beef Kebab And Tomato Stew',
			price: '65.00',
			category: 'Other Rice Dishes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf629',
			body: 'Plain Rice With Goat Stew',
			image: '',
			alt: 'Plain Rice With Goat Stew',
			price: '59.00',
			category: 'Other Rice Dishes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf630',
			body: 'Angwamo With Fried Egg, Sardine, Sausage',
			image: '',
			alt: 'Angwamo With Fried Egg, Sardine, Sausage',
			price: '65.00',
			category: 'Other Rice Dishes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf631',
			body: 'Angwamo Fully Loaded',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/Angwamo%20loaded.jpeg',
			alt: 'Angwamo Fully Loaded',
			price: '100.00',
			category: 'Other Rice Dishes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf632',
			body: 'Ga Kenkey With Fried Fish And Eggs',
			image: '',
			alt: 'Ga Kenkey With Fried Fish And Eggs',
			price: '50.00',
			category: 'Kenkey Corner',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf633',
			body: 'Kenkey with Tsofi Only',
			image: '',
			alt: 'Kenkey with Tsofi Only',
			price: '60.00',
			category: 'Kenkey Corner',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf634',
			body: 'Ga Kenkey With Shrimps[Calamari & Tsofi(Turkey Tails)]',
			image: '',
			alt: 'Ga Kenkey With Shrimps[Calamari & Tsofi(Turkey Tails)]',
			price: '125.00',
			category: 'Kenkey Corner',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf635',
			body: 'Ga Kenkey Fried Eggs, Calamari, Shrimps, Fried Fish &Avocados',
			image: '',
			alt: 'Ga Kenkey Fried Eggs, Calamari, Shrimps, Fried Fish &Avocados',
			price: '140.00',
			category: 'Kenkey Corner',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf636',
			body: 'Shrimps, Calamari & Grilled Pork',
			image: '',
			alt: 'Shrimps, Calamari & Grilled Pork',
			price: '100.00',
			category: 'Kenkey Corner',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf637',
			body: 'Kenkey With Grilled Pork',
			image: '',
			alt: 'Kenkey With Grilled Pork',
			price: '65.00',
			category: 'Kenkey Corner',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf680',
			body: 'Kenkey With Grilled Chicken',
			image: '',
			alt: 'Kenkey With Grilled Chicken',
			price: '55.00',
			category: 'Kenkey Corner',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf638',
			body: 'Kenkey With Sardine, Corned Beef, Fried Egg, Fried Fish',
			image: '',
			alt: 'Kenkey With Sardine, Corned Beef, Fried Egg, Fried Fish',
			price: '75.00',
			category: 'kenkey Corner',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf639',
			body: 'Banku With Tilapia',
			image: '',
			alt: 'Banku With Tilapia',
			price: '85.00',
			category: 'Banku Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf640',
			body: 'Banku With Assorted Meat Okro Soup',
			image: '',
			alt: 'Banku With Assorted Meat Okro Soup',
			price: '85.00',
			category: 'Banku Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf641',
			body: 'Banku with Fried Fish & Fried Egg',
			image: '',
			alt: 'Banku with Fried Fish & Fried Egg',
			price: '50.00',
			category: 'Banku Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf642',
			body: 'Banku With Tsofi (Turkey Tails), Fried Egg & Fried Fish',
			image: '',
			alt: 'Banku With Tsofi (Turkey Tails), Fried Egg & Fried Fish',
			price: '83.00',
			category: 'Banku Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf643',
			body: 'Banku With Fried  Eggs, Calamari, Shrimps, Fried Fish & Avocados',
			image: '',
			alt: 'Banku With Fried  Eggs, Calamari, Shrimps, Fried Fish & Avocados',
			price: '150.00',
			category: 'Banku Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf644',
			body: 'Banku With Shrimps, Calamari & Grilled Pork',
			image: '',
			alt: 'Banku With Shrimps, Calamari & Grilled Pork',
			price: '150.00',
			category: 'Banku Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf645',
			body: 'Banku With Grilled Pork',
			image: '',
			alt: 'Banku With Grilled Pork',
			price: '75.00',
			category: 'Banku Combo',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf646',
			body: 'Indomie Basic ( Chicken, Sausages, Gizzard, Veggies)',
			image: '',
			alt: 'Indomie Basic ( Chicken, Sausages, Gizzard, Veggies)',
			price: '50.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf647',
			body: 'Indomie Loaded ( Chicken, Gizzard, Beef Pieces, Eggs, Sausages )',
			image: '',
			alt: 'Indomie Loaded ( Chicken, Gizzard, Beef Pieces, Eggs, Sausages )',
			price: '65.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf648',
			body: 'Indomie Epic ( Shrimps, Beef Pieces, Chicken, Eggs, Gizzard, Sausages, Sardines, Veggies )',
			image:
				'https://raw.githubusercontent.com/Adroit360/Griddle-Kitchen/main/menu-Images/Indomieepic.jpeg',
			alt: 'Indomie Epic ( Shrimps, Beef Pieces, Chicken, Eggs, Gizzard, Sausages, Sardines, Veggies )',
			price: '85.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf649',
			body: 'Check Check Basic ( Fried Rice With Fried Chicken Salad )',
			image: '',
			alt: 'Check Check Basic ( Fried Rice With Fried Chicken Salad )',
			price: '50.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf650',
			body: 'Check Check Loaded [ Beef Fried Rice With Fried Chicken & Salad ]',
			image: '',
			alt: ' Check Check Loaded [ Beef Fried Rice With Fried Chicken & Salad ]',
			price: '65.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf651',
			body: 'Waakye Basic ( Fish/ Meat, Wele, Egg, Gari, Spagetti, Stew)',
			image: '',
			alt: 'Waakye Basic ( Fish/ Meat, Wele, Egg, Gari, Spagetti, Stew)',
			price: '50.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf652',
			body: 'Waakye Loaded ( Fish, Eggs, Beef Stew, Wele, Gari, Spagetti, Stew )',
			image: '',
			alt: 'Waakye Loaded ( Fish, Eggs, Beef Stew, Wele, Gari, Spagetti, Stew )',
			price: '65.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf653',
			body: 'Red Red Basic Egg',
			image: '',
			alt: 'Red Red Basic Egg',
			price: '50.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf654',
			body: 'Red Red Basic FIsh',
			image: '',
			alt: 'Red Red Basic FIsh',
			price: '50.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf655',
			body: 'Red Red Loaded Egg & Fish Chicken',
			image: '',
			alt: 'Red Red Loaded Egg & Fish Chicken',
			price: '50.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf656',
			body: 'Red Red Loaded Egg & Fish Meat Pieces',
			image: '',
			alt: 'Red Red Loaded Egg & Fish Meat Pieces',
			price: '60.00',
			category: 'Ghanaian Style',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf657',
			body: 'Potato Chips',
			image: '',
			alt: 'Potato Chips',
			price: '28.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf658',
			body: 'Yam Chips Only',
			image: '',
			alt: 'Yam Chips Only',
			price: '28.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf659',
			body: '(1 Portion) Tsofi Only',
			image: '',
			alt: '(1 Portion) Tsofi Only',
			price: '60.00',
			category: 'Extras And SIdes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf660',
			body: 'Kelewele Only',
			image: '',
			alt: 'Kelewele Only',
			price: '25.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf661',
			body: '1 Piece Grilled Chicken',
			image: '',
			alt: '1 Piece Grilled Chicken',
			price: '12.00',
			category: 'Extras And SIdes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf662',
			body: 'Calamari Only',
			image: '',
			alt: 'Calamari Only',
			price: '85.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf663',
			body: '1 Portion Shrimp',
			image: '',
			alt: '1 Portion Shrimp',
			price: '120.00',
			category: ' Extras And SIdes',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf664',
			body: 'Suya/Kpakpo Snail',
			image: '',
			alt: 'Suya/Kpakpo Snail',
			price: '150.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf665',
			body: 'Banku Only',
			image: '',
			alt: 'Banku Only',
			price: '7.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf666',
			body: 'Plain Rice Only',
			image: '',
			alt: 'Plain Rice Only',
			price: '28.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf667',
			body: 'Jollof Only',
			image: '',
			alt: 'Jollof Only',
			price: '30.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf668',
			body: 'Waakye Only',
			image: '',
			alt: 'Waakye Only',
			price: '28.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf669',
			body: 'Fried Rice Only',
			image: '',
			alt: 'Fried Rice Only',
			price: '30.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf670',
			body: '(1 Portion) Pork Only',
			image: '',
			alt: '(1 Portion) Pork Only',
			price: '50.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf671',
			body: '(1 Portion) Suya Goat Only',
			image: '',
			alt: '(1 Portion) Suya Goat Only',
			price: '50.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf672',
			body: 'Fish Kebab (1)',
			image: '',
			alt: 'Fish Kebab (1)',
			price: '15.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf673',
			body: 'Beef Kebab (1)',
			image: '',
			alt: 'Beef Kebab (1)',
			price: '15.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf674',
			body: 'Chicken Kebab(1) Only',
			image: '',
			alt: 'Chicken Kebab(1) Only',
			price: '20.00',
			category: 'Extras And Sides',
		},
		{
			id: '91fcca31cba046fea468af2c659bcf675',
			body: 'Goat Kebab (1)',
			image: '',
			alt: 'Goat Kebab (1)',
			price: '15.00',
			category: 'Extras And Sides',
		},
	];

	getFoodByID(id: string): Food {
		return this.foodArray.filter((item) => item.id === id)[0];
	}

	getAllFoods(): Food[] {
		return this.foodArray;
	}

	getFoodByCategory(category: string): Food[] {
		if (category === 'all foods') {
			return this.foodArray.filter((food) => food.category !== 'extras');
		}
		return this.foodArray.filter((food) => food.category === category);
	}

	getClosingTime(): { closingTime: string; openingTime: string } {
		return { closingTime: this.closingTime, openingTime: this.openingTime };
	}

	onSearchFood(searchTerm: string, category: string) {
		if (!searchTerm) {
			return this.getFoodByCategory(category);
		}
		return this.getFoodByCategory(category).filter((it) => {
			return it.body.toLocaleLowerCase().includes(searchTerm);
		});
	}

	onGetCategories(): string[] {
		this.getAllFoods().forEach((item) => {
			if (!this.categories.includes(item.category)) {
				this.categories.push(item.category);
			}
		});
		return this.categories;
	}
}
