//
//	Q U E S T I O N S 
//
var answers = [{"id": 0, "Event": "Big Bang", "Month": 1, "Day":1, "bya": 13.8},
			   {"id": 1, "Event": "Milky Way Galaxy forms", "Month": 3, "Day":15, "bya": 11},
			   {"id": 2, "Event": "The Sun is formed", "Month": 8, "Day":31, "bya": 4.57},
			   {"id": 3, "Event": "Oldest rocks known on Earth form", "Month": 9, "Day":16, "bya": 4.0},
			    // Evolution of Life on Earth
			   {"id": 4, "Event": "First prokaryotes", "Month": 9, "Day":21, "bya": 3.8},	 
			   {"id": 5, "Event": "Photosynthesis begins", "Month": 10, "Day":12, "bya": 3},
			   {"id": 6, "Event": "Oxygen appears in Earth's atmosphere", "Month": 10, "Day":29, "bya": 2.4},
			   {"id": 7, "Event": "Complex cells (eurkaryotes) form", "Month": 11, "Day":9, "bya": 2},
			   {"id": 8, "Event": "First multicellular life", "Month": 12, "Day":5, "bya": 1.0},
			   {"id": 9, "Event": "Simple animals emerge", "Month": 12, "Day":14, "bya": 0.67},
			   {"id": 10, "Event": "Ancestors of insects emerge", "Month": 12, "Day":14, "bya": 0.55},
			   {"id": 11, "Event": "Fish emerge", "Month": 12, "Day":18, "bya": 0.5},
			   {"id": 12, "Event": "Land plants", "Month": 12, "Day":20, "bya": 0.45},
			   {"id": 13, "Event": "Insects and seeds", "Month": 12, "Day":21, "bya": 0.4},
			   {"id": 14, "Event": "Amphibians", "Month": 12, "Day":22, "bya": 0.36},
			   {"id": 15, "Event": "Mammals", "Month": 12, "Day":26, "bya": 0.2},
			   {"id": 16, "Event": "Birds", "Month": 12, "Day":27, "bya": 0.15},
			   {"id": 17, "Event": "Flowers", "Month": 12, "Day":28, "bya": 0.13},
			   {"id": 18, "Event": "Dinosaurs die out", "Month": 12, "Day":30, "bya": 0.065}]

// Each box is 42 x 42
var markerPos = // JANUARY
				[{"Month": 1, "Day":1, "x": 127, "y": 0},
				{"Month": 1, "Day":2, "x": 169, "y": 0},
				{"Month": 1, "Day":3, "x": 211, "y": 0},
				{"Month": 1, "Day":4, "x": 253, "y": 0},
				{"Month": 1, "Day":5, "x": 0, "y": 21},
				{"Month": 1, "Day":6, "x": 42, "y": 21},
				{"Month": 1, "Day":7, "x": 85, "y": 21},
				{"Month": 1, "Day":8, "x": 127, "y": 21},
				{"Month": 1, "Day":9, "x": 169, "y": 21},
				{"Month": 1, "Day":10, "x": 211, "y": 21},
				{"Month": 1, "Day":11, "x": 253, "y": 21},
				{"Month": 1, "Day":12, "x": 0, "y": 63},
				{"Month": 1, "Day":13, "x": 42, "y": 63},
				{"Month": 1, "Day":14, "x": 85, "y": 63},
				{"Month": 1, "Day":15, "x": 127, "y": 63},
				{"Month": 1, "Day":16, "x": 169, "y": 63},
				{"Month": 1, "Day":17, "x": 211, "y": 63},
				{"Month": 1, "Day":18, "x": 253, "y": 63},
				{"Month": 1, "Day":19, "x": 0, "y": 105},
				{"Month": 1, "Day":20, "x": 42, "y": 105},
				{"Month": 1, "Day":21, "x": 85, "y": 105},
				{"Month": 1, "Day":22, "x": 127, "y": 105},
				{"Month": 1, "Day":23, "x": 169, "y": 105},
				{"Month": 1, "Day":24, "x": 211, "y": 105},
				{"Month": 1, "Day":25, "x": 253, "y": 105},
				{"Month": 1, "Day":26, "x": 0, "y": 147},
				{"Month": 1, "Day":27, "x": 42, "y": 147},
				{"Month": 1, "Day":28, "x": 85, "y": 147},
				{"Month": 1, "Day":29, "x": 127, "y": 147},
				{"Month": 1, "Day":30, "x": 169, "y": 147},
				{"Month": 1, "Day":31, "x": 211, "y": 147},
				// FEBRUARY
				{"Month": 2, "Day":1, "x": 550, "y": 0},
				{"Month": 2, "Day":2, "x": 297, "y": 21},
				{"Month": 2, "Day":3, "x": 339, "y": 21},
				{"Month": 2, "Day":4, "x": 381, "y": 21},
				{"Month": 2, "Day":5, "x": 423, "y": 21},
				{"Month": 2, "Day":6, "x": 465, "y": 21},
				{"Month": 2, "Day":7, "x": 508, "y": 21},
				{"Month": 2, "Day":8, "x": 550, "y": 21},
				{"Month": 2, "Day":9, "x": 297, "y": 63},
				{"Month": 2, "Day":10, "x": 339, "y": 63},
				{"Month": 2, "Day":11, "x": 381, "y": 63},
				{"Month": 2, "Day":12, "x": 423, "y": 63},
				{"Month": 2, "Day":13, "x": 465, "y": 63},
				{"Month": 2, "Day":14, "x": 508, "y": 63},
				{"Month": 2, "Day":15, "x": 550, "y": 63},
				{"Month": 2, "Day":16, "x": 297, "y": 105},
				{"Month": 2, "Day":17, "x": 339, "y": 105},
				{"Month": 2, "Day":18, "x": 381, "y": 105},
				{"Month": 2, "Day":19, "x": 423, "y": 105},
				{"Month": 2, "Day":20, "x": 465, "y": 105},
				{"Month": 2, "Day":21, "x": 508, "y": 105},
				{"Month": 2, "Day":22, "x": 550, "y": 105},
				{"Month": 2, "Day":23, "x": 297, "y": 147},
				{"Month": 2, "Day":24, "x": 339, "y": 147},
				{"Month": 2, "Day":25, "x": 381, "y": 147},
				{"Month": 2, "Day":26, "x": 423, "y": 147},
				{"Month": 2, "Day":27, "x": 465, "y": 147},
				{"Month": 2, "Day":28, "x": 508, "y": 147},
				// MARCH
				{"Month": 3, "Day":1, "x": 851, "y": 0},
				{"Month": 3, "Day":2, "x": 593, "y": 21},
				{"Month": 3, "Day":3, "x": 636, "y": 21},
				{"Month": 3, "Day":4, "x": 679, "y": 21},
				{"Month": 3, "Day":5, "x": 722, "y": 21},
				{"Month": 3, "Day":6, "x": 765, "y": 21},
				{"Month": 3, "Day":7, "x": 808, "y": 21},
				{"Month": 3, "Day":8, "x": 851, "y": 21},
				{"Month": 3, "Day":9, "x": 593, "y": 63},
				{"Month": 3, "Day":10, "x": 636, "y": 63},
				{"Month": 3, "Day":11, "x": 679, "y": 63},
				{"Month": 3, "Day":12, "x": 722, "y": 63},
				{"Month": 3, "Day":13, "x": 765, "y": 63},
				{"Month": 3, "Day":14, "x": 808, "y": 63},
				{"Month": 3, "Day":15, "x": 851, "y": 63},
				{"Month": 3, "Day":16, "x": 593, "y": 105},
				{"Month": 3, "Day":17, "x": 636, "y": 105},
				{"Month": 3, "Day":18, "x": 679, "y": 105},
				{"Month": 3, "Day":19, "x": 722, "y": 105},
				{"Month": 3, "Day":20, "x": 765, "y": 105},
				{"Month": 3, "Day":21, "x": 808, "y": 105},
				{"Month": 3, "Day":22, "x": 851, "y": 105},
				{"Month": 3, "Day":23, "x": 593, "y": 147},
				{"Month": 3, "Day":24, "x": 636, "y": 147},
				{"Month": 3, "Day":25, "x": 679, "y": 147},
				{"Month": 3, "Day":26, "x": 722, "y": 147},
				{"Month": 3, "Day":27, "x": 765, "y": 147},
				{"Month": 3, "Day":28, "x": 808, "y": 147},
				{"Month": 3, "Day":28, "x": 851, "y": 147},
				// APRIL
				{"Month": 4, "Day":1, "x": 980, "y": 0},
				{"Month": 4, "Day":2, "x": 1023, "y": 0},
				{"Month": 4, "Day":3, "x": 1064, "y": 0},
				{"Month": 4, "Day":4, "x": 1107, "y": 0},
				{"Month": 4, "Day":5, "x": 1148, "y": 0},
				{"Month": 4, "Day":6, "x": 894, "y": 21},
				{"Month": 4, "Day":7, "x": 937, "y": 21},
				{"Month": 4, "Day":8, "x": 980, "y": 21},
				{"Month": 4, "Day":9, "x": 1023, "y": 21},
				{"Month": 4, "Day":10, "x": 1064, "y": 21},
				{"Month": 4, "Day":11, "x": 1107, "y": 21},
				{"Month": 4, "Day":12, "x": 1148, "y": 21},
				{"Month": 4, "Day":13, "x": 894, "y": 63},
				{"Month": 4, "Day":14, "x": 937, "y": 63},
				{"Month": 4, "Day":15, "x": 980, "y": 63},
				{"Month": 4, "Day":16, "x": 1023, "y": 63},
				{"Month": 4, "Day":17, "x": 1064, "y": 63},
				{"Month": 4, "Day":18, "x": 1107, "y": 63},
				{"Month": 4, "Day":19, "x": 1148, "y": 63},
				{"Month": 4, "Day":20, "x": 894, "y": 105},
				{"Month": 4, "Day":21, "x": 937, "y": 105},
				{"Month": 4, "Day":22, "x": 980, "y": 105},
				{"Month": 4, "Day":23, "x": 1023, "y": 105},
				{"Month": 4, "Day":24, "x": 1064, "y": 105},
				{"Month": 4, "Day":25, "x": 1107, "y": 105},
				{"Month": 4, "Day":26, "x": 1148, "y": 105},
				{"Month": 4, "Day":27, "x": 894, "y": 147},
				{"Month": 4, "Day":28, "x": 937, "y": 147},
				{"Month": 4, "Day":29, "x": 980, "y": 147},
				{"Month": 4, "Day":30, "x": 1023, "y": 147},
				// MAY
				{"Month": 5, "Day":1, "x": 169, "y": 190},
				{"Month": 5, "Day":2, "x": 211, "y": 190},
				{"Month": 5, "Day":3, "x": 253, "y": 190},
				{"Month": 5, "Day":4, "x": 0, "y": 233},
				{"Month": 5, "Day":5, "x": 42, "y": 233},
				{"Month": 5, "Day":6, "x": 85, "y": 233},
				{"Month": 5, "Day":7, "x": 127, "y": 233},
				{"Month": 5, "Day":8, "x": 169, "y": 233},
				{"Month": 5, "Day":9, "x": 211, "y": 233},
				{"Month": 5, "Day":10, "x": 253, "y": 233},
				{"Month": 5, "Day":11, "x": 0, "y": 276},
				{"Month": 5, "Day":12, "x": 42, "y": 276},
				{"Month": 5, "Day":13, "x": 85, "y": 276},
				{"Month": 5, "Day":14, "x": 127, "y": 276},
				{"Month": 5, "Day":15, "x": 169, "y": 276},
				{"Month": 5, "Day":16, "x": 211, "y": 276},
				{"Month": 5, "Day":17, "x": 253, "y": 276},
				{"Month": 5, "Day":18, "x": 0, "y": 319},
				{"Month": 5, "Day":19, "x": 42, "y": 319},
				{"Month": 5, "Day":20, "x": 85, "y": 319},
				{"Month": 5, "Day":21, "x": 127, "y": 319},
				{"Month": 5, "Day":22, "x": 169, "y": 319},
				{"Month": 5, "Day":23, "x": 211, "y": 319},
				{"Month": 5, "Day":24, "x": 253, "y": 319},
				{"Month": 5, "Day":25, "x": 0, "y": 362},
				{"Month": 5, "Day":26, "x": 42, "y": 362},
				{"Month": 5, "Day":27, "x": 85, "y": 362},
				{"Month": 5, "Day":28, "x": 127, "y": 362},
				{"Month": 5, "Day":29, "x": 169, "y": 362},
				{"Month": 5, "Day":30, "x": 211, "y": 362},
				{"Month": 5, "Day":31, "x": 253, "y": 362},
				// JUNE
				{"Month": 6, "Day":1, "x": 297, "y": 190},
				{"Month": 6, "Day":2, "x": 339, "y": 190},
				{"Month": 6, "Day":3, "x": 381, "y": 190},
				{"Month": 6, "Day":4, "x": 423, "y": 190},
				{"Month": 6, "Day":5, "x": 465, "y": 190},
				{"Month": 6, "Day":6, "x": 508, "y": 190},
				{"Month": 6, "Day":7, "x": 550, "y": 190},
				{"Month": 6, "Day":8, "x": 297, "y": 233},
				{"Month": 6, "Day":9, "x": 339, "y": 233},
				{"Month": 6, "Day":10, "x": 381, "y": 233},
				{"Month": 6, "Day":11, "x": 423, "y": 233},
				{"Month": 6, "Day":12, "x": 465, "y": 233},
				{"Month": 6, "Day":13, "x": 508, "y": 233},
				{"Month": 6, "Day":14, "x": 550, "y": 233},
				{"Month": 6, "Day":15, "x": 297, "y": 276},
				{"Month": 6, "Day":16, "x": 339, "y": 276},
				{"Month": 6, "Day":17, "x": 381, "y": 276},
				{"Month": 6, "Day":18, "x": 423, "y": 276},
				{"Month": 6, "Day":19, "x": 465, "y": 276},
				{"Month": 6, "Day":20, "x": 508, "y": 276},
				{"Month": 6, "Day":21, "x": 550, "y": 276},
				{"Month": 6, "Day":22, "x": 297, "y": 319},
				{"Month": 6, "Day":23, "x": 339, "y": 319},
				{"Month": 6, "Day":24, "x": 381, "y": 319},
				{"Month": 6, "Day":25, "x": 423, "y": 319},
				{"Month": 6, "Day":26, "x": 465, "y": 319},
				{"Month": 6, "Day":27, "x": 508, "y": 319},
				{"Month": 6, "Day":28, "x": 550, "y": 319},
				{"Month": 6, "Day":29, "x": 297, "y": 362},
				{"Month": 6, "Day":30, "x": 339, "y": 362},
				// JULY
				{"Month": 7, "Day":1, "x": 679, "y": 190},
				{"Month": 7, "Day":1, "x": 722, "y": 190},
				{"Month": 7, "Day":1, "x": 765, "y": 190},
				{"Month": 7, "Day":1, "x": 808, "y": 190},
				{"Month": 7, "Day":1, "x": 851, "y": 190},
				{"Month": 7, "Day":2, "x": 593, "y": 233},
				{"Month": 7, "Day":3, "x": 636, "y": 233},
				{"Month": 7, "Day":4, "x": 679, "y": 233},
				{"Month": 7, "Day":5, "x": 722, "y": 233},
				{"Month": 7, "Day":6, "x": 765, "y": 233},
				{"Month": 7, "Day":7, "x": 808, "y": 233},
				{"Month": 7, "Day":8, "x": 851, "y": 233},
				{"Month": 7, "Day":9, "x": 593, "y": 276},
				{"Month": 7, "Day":10, "x": 636, "y": 276},
				{"Month": 7, "Day":11, "x": 679, "y": 276},
				{"Month": 7, "Day":12, "x": 722, "y": 276},
				{"Month": 7, "Day":13, "x": 765, "y": 276},
				{"Month": 7, "Day":14, "x": 808, "y": 276},
				{"Month": 7, "Day":15, "x": 851, "y": 276},
				{"Month": 7, "Day":16, "x": 593, "y": 319},
				{"Month": 7, "Day":17, "x": 636, "y": 319},
				{"Month": 7, "Day":18, "x": 679, "y": 319},
				{"Month": 7, "Day":19, "x": 722, "y": 319},
				{"Month": 7, "Day":20, "x": 765, "y": 319},
				{"Month": 7, "Day":21, "x": 808, "y": 319},
				{"Month": 7, "Day":22, "x": 851, "y": 319},
				{"Month": 7, "Day":23, "x": 593, "y": 362},
				{"Month": 7, "Day":24, "x": 636, "y": 362},
				{"Month": 7, "Day":25, "x": 679, "y": 362},
				{"Month": 7, "Day":26, "x": 722, "y": 362},
				{"Month": 7, "Day":27, "x": 765, "y": 362},
				{"Month": 7, "Day":28, "x": 808, "y": 362},
				{"Month": 7, "Day":28, "x": 851, "y": 362},
				// AUGUST
				{"Month": 8, "Day":1, "x": 1107, "y": 190},
				{"Month": 8, "Day":2, "x": 1148, "y": 190},
				{"Month": 8, "Day":3, "x": 894, "y": 233},
				{"Month": 8, "Day":4, "x": 937, "y": 233},
				{"Month": 8, "Day":5, "x": 980, "y": 233},
				{"Month": 8, "Day":6, "x": 1023, "y": 233},
				{"Month": 8, "Day":7, "x": 1064, "y": 233},
				{"Month": 8, "Day":8, "x": 1107, "y": 233},
				{"Month": 8, "Day":9, "x": 1148, "y": 233},
				{"Month": 8, "Day":10, "x": 894, "y": 276},
				{"Month": 8, "Day":11, "x": 937, "y": 276},
				{"Month": 8, "Day":12, "x": 980, "y": 276},
				{"Month": 8, "Day":13, "x": 1023, "y": 276},
				{"Month": 8, "Day":14, "x": 1064, "y": 276},
				{"Month": 8, "Day":15, "x": 1107, "y": 276},
				{"Month": 8, "Day":16, "x": 1148, "y": 276},
				{"Month": 8, "Day":17, "x": 894, "y": 319},
				{"Month": 8, "Day":18, "x": 937, "y": 319},
				{"Month": 8, "Day":19, "x": 980, "y": 319},
				{"Month": 8, "Day":20, "x": 1023, "y": 319},
				{"Month": 8, "Day":21, "x": 1064, "y": 319},
				{"Month": 8, "Day":22, "x": 1107, "y": 319},
				{"Month": 8, "Day":23, "x": 1148, "y": 319},
				{"Month": 8, "Day":24, "x": 894, "y": 362},
				{"Month": 8, "Day":25, "x": 937, "y": 362},
				{"Month": 8, "Day":26, "x": 980, "y": 362},
				{"Month": 8, "Day":27, "x": 1023, "y": 362},
				{"Month": 8, "Day":28, "x": 1064, "y": 362},
				{"Month": 8, "Day":29, "x": 1107, "y": 362},
				{"Month": 8, "Day":30, "x": 1148, "y": 362},
				// SEPTEMBER
				{"Month": 9, "Day":1, "x": 127, "y": 402},
				{"Month": 9, "Day":2, "x": 169, "y": 402},
				{"Month": 9, "Day":3, "x": 211, "y": 402},
				{"Month": 9, "Day":4, "x": 253, "y": 402},
				{"Month": 9, "Day":5, "x": 253, "y": 402},
				{"Month": 9, "Day":6, "x": 253, "y": 402},
				{"Month": 9, "Day":7, "x": 0, "y": 443},
				{"Month": 9, "Day":8, "x": 42, "y": 443},
				{"Month": 9, "Day":9, "x": 85, "y": 443},
				{"Month": 9, "Day":10, "x": 127, "y": 443},
				{"Month": 9, "Day":11, "x": 169, "y": 443},
				{"Month": 9, "Day":12, "x": 211, "y": 443},
				{"Month": 9, "Day":13, "x": 253, "y": 443},
				{"Month": 9, "Day":14, "x": 0, "y": 484},
				{"Month": 9, "Day":15, "x": 42, "y": 484},
				{"Month": 9, "Day":16, "x": 85, "y": 484},
				{"Month": 9, "Day":17, "x": 127, "y": 484},
				{"Month": 9, "Day":18, "x": 169, "y": 484},
				{"Month": 9, "Day":19, "x": 211, "y": 484},
				{"Month": 9, "Day":20, "x": 253, "y": 484},
				{"Month": 9, "Day":21, "x": 0, "y": 526},
				{"Month": 9, "Day":22, "x": 42, "y": 526},
				{"Month": 9, "Day":23, "x": 85, "y": 526},
				{"Month": 9, "Day":24, "x": 127, "y": 526},
				{"Month": 9, "Day":25, "x": 169, "y": 526},
				{"Month": 9, "Day":26, "x": 211, "y": 526},
				{"Month": 9, "Day":27, "x": 253, "y": 526},
				{"Month": 9, "Day":28, "x": 0, "y": 568},
				{"Month": 9, "Day":29, "x": 42, "y": 568},
				{"Month": 9, "Day":30, "x": 85, "y": 568},
				// OCTOBER
				{"Month": 10, "Day":1, "x": 423, "y": 402},
				{"Month": 10, "Day":2, "x": 465, "y": 402},
				{"Month": 10, "Day":3, "x": 508, "y": 402},
				{"Month": 10, "Day":4, "x": 550, "y": 402},
				{"Month": 10, "Day":5, "x": 297, "y": 443},
				{"Month": 10, "Day":6, "x": 339, "y": 443},
				{"Month": 10, "Day":7, "x": 381, "y": 443},
				{"Month": 10, "Day":8, "x": 423, "y": 443},
				{"Month": 10, "Day":9, "x": 465, "y": 443},
				{"Month": 10, "Day":10, "x": 508, "y": 443},
				{"Month": 10, "Day":11, "x": 550, "y": 443},
				{"Month": 10, "Day":12, "x": 297, "y": 484},
				{"Month": 10, "Day":13, "x": 339, "y": 484},
				{"Month": 10, "Day":14, "x": 381, "y": 484},
				{"Month": 10, "Day":15, "x": 423, "y": 484},
				{"Month": 10, "Day":16, "x": 465, "y": 484},
				{"Month": 10, "Day":17, "x": 508, "y": 484},
				{"Month": 10, "Day":18, "x": 550, "y": 484},
				{"Month": 10, "Day":19, "x": 297, "y": 526},
				{"Month": 10, "Day":20, "x": 339, "y": 526},
				{"Month": 10, "Day":21, "x": 381, "y": 526},
				{"Month": 10, "Day":22, "x": 423, "y": 526},
				{"Month": 10, "Day":23, "x": 465, "y": 526},
				{"Month": 10, "Day":24, "x": 508, "y": 526},
				{"Month": 10, "Day":25, "x": 550, "y": 526},
				{"Month": 10, "Day":26, "x": 297, "y": 568},
				{"Month": 10, "Day":27, "x": 339, "y": 568},
				{"Month": 10, "Day":28, "x": 381, "y": 568},
				{"Month": 10, "Day":29, "x": 423, "y": 568},	
				{"Month": 10, "Day":30, "x": 465, "y": 568},		
				{"Month": 10, "Day":31, "x": 508, "y": 568},
				// NOVEMBER
				{"Month": 11, "Day":1, "x": 851, "y": 402},
				{"Month": 11, "Day":2, "x": 593, "y": 443},
				{"Month": 11, "Day":3, "x": 636, "y": 443},
				{"Month": 11, "Day":4, "x": 679, "y": 443},
				{"Month": 11, "Day":5, "x": 722, "y": 443},
				{"Month": 11, "Day":6, "x": 765, "y": 443},
				{"Month": 11, "Day":7, "x": 808, "y": 443},
				{"Month": 11, "Day":8, "x": 851, "y": 443},
				{"Month": 11, "Day":9, "x": 593, "y": 484},
				{"Month": 11, "Day":10, "x": 636, "y": 484},
				{"Month": 11, "Day":11, "x": 679, "y": 484},
				{"Month": 11, "Day":12, "x": 722, "y": 484},
				{"Month": 11, "Day":13, "x": 765, "y": 484},
				{"Month": 11, "Day":14, "x": 808, "y": 484},
				{"Month": 11, "Day":15, "x": 851, "y": 484},
				{"Month": 11, "Day":16, "x": 593, "y": 526},
				{"Month": 11, "Day":17, "x": 636, "y": 526},
				{"Month": 11, "Day":18, "x": 679, "y": 526},
				{"Month": 11, "Day":19, "x": 722, "y": 526},
				{"Month": 11, "Day":20, "x": 765, "y": 526},
				{"Month": 11, "Day":21, "x": 808, "y": 526},
				{"Month": 11, "Day":22, "x": 851, "y": 526},
				{"Month": 11, "Day":23, "x": 593, "y": 568},
				{"Month": 11, "Day":24, "x": 636, "y": 568},
				{"Month": 11, "Day":25, "x": 679, "y": 568},
				{"Month": 11, "Day":26, "x": 722, "y": 568},
				{"Month": 11, "Day":27, "x": 765, "y": 568},
				{"Month": 11, "Day":28, "x": 808, "y": 568},
				{"Month": 11, "Day":29, "x": 851, "y": 568},
				// DECEMBER
				{"Month": 12, "Day":1, "x": 980, "y": 402},
				{"Month": 12, "Day":2, "x": 1023, "y": 402},
				{"Month": 12, "Day":3, "x": 1064, "y": 402},
				{"Month": 12, "Day":4, "x": 1107, "y": 402},
				{"Month": 12, "Day":5, "x": 1148, "y": 402},
				{"Month": 12, "Day":6, "x": 894, "y": 443},
				{"Month": 12, "Day":7, "x": 937, "y": 443},
				{"Month": 12, "Day":8, "x": 980, "y": 443},
				{"Month": 12, "Day":9, "x": 1023, "y": 443},
				{"Month": 12, "Day":10, "x": 1064, "y": 443},
				{"Month": 12, "Day":11, "x": 1107, "y": 443},
				{"Month": 12, "Day":12, "x": 1148, "y": 443},
				{"Month": 12, "Day":13, "x": 894, "y": 484},
				{"Month": 12, "Day":14, "x": 937, "y": 484},
				{"Month": 12, "Day":15, "x": 980, "y": 484},
				{"Month": 12, "Day":16, "x": 1023, "y": 484},
				{"Month": 12, "Day":17, "x": 1064, "y": 484},
				{"Month": 12, "Day":18, "x": 1107, "y": 484},
				{"Month": 12, "Day":19, "x": 1148, "y": 484},
				{"Month": 12, "Day":20, "x": 894, "y": 526},
				{"Month": 12, "Day":21, "x": 937, "y": 526},
				{"Month": 12, "Day":22, "x": 980, "y": 526},
				{"Month": 12, "Day":23, "x": 1023, "y": 526},
				{"Month": 12, "Day":24, "x": 1064, "y": 526},
				{"Month": 12, "Day":25, "x": 1107, "y": 526},
				{"Month": 12, "Day":26, "x": 1148, "y": 526},
				{"Month": 12, "Day":27, "x": 894, "y": 568},
				{"Month": 12, "Day":28, "x": 937, "y": 568},
				{"Month": 12, "Day":29, "x": 980, "y": 568},
				{"Month": 12, "Day":30, "x": 1023, "y": 568},
				{"Month": 12, "Day":31, "x": 1064, "y": 568}]




//
// G L O B A L   V A R I A B L E S 
//
var usedIndex = [0, 0, 0, 0, 0, 
				 0, 0, 0, 0, 0];
var monthGuess = new Array();
var dayGuess = new Array();
var count = 0;
var randomIndex;


//
//	I N I T I A L I Z I N G   P A G E
//
function init() {

	images();
	// ask the first question
	ask();


	/* ASKS ALL QUESTIONS
	for (var i = 1; i < answers.length-1; i++) {
		ask();
	}
	*/
}

//
//	I M A G E S
//
function images() {
	// drawImage(img_name, sx, sy, sw, sh, x, y, w, h)
	var canvas = document.getElementById("visual");
	var ctx = canvas.getContext("2d");

	if (!(document.getElementById("visual"))) {
		// browser is not supported
		console.log("Your browser doesn't support canvas!");
		return;
	}

/* CHECKS POSITION OF PINS
	for (var i = 0; i < markerPos.length; i++) {
		bluePin(markerPos[i]["x"], markerPos[i]["y"]);
	}
*/

}

function bluePin(x, y) {
	var canvas = document.getElementById("visual");
	var ctx = canvas.getContext("2d");
	// drawImage(img_name, sx, sy, sw, sh, x, y, w, h)
	var pin = document.getElementById("blue_pin");
	ctx.drawImage(pin, 0, 0, 256, 256, x, y, 42, 42);
}

function pinkPin(x, y) {
	var canvas = document.getElementById("visual");
	var ctx = canvas.getContext("2d");
	// drawImage(img_name, sx, sy, sw, sh, x, y, w, h)
	var pin = document.getElementById("pink_pin");
	ctx.drawImage(pin, 0, 0, 256, 256, x, y, 42, 42);
}

//
//	A S K   Q U E S T I O N S
//
function ask() {

	do {
		randomIndex = Math.floor(Math.random() * ((answers.length-1) + 1));
	} while (usedIndex[randomIndex] == 1);

	usedIndex[randomIndex]++;

	// add paragraph with question description
	var para = document.createElement('p');
	para.innerHTML = answers[randomIndex]["Event"];

	// append paragraph to the question div
	var questionDiv = document.getElementById("question");
	questionDiv.appendChild(para);

	//	evalResponse(randomIndex);
//	getIndex(randomIndex);
}

function deleteQuestion() {
	var questionDiv = document.getElementById("question");
	questionDiv.removeChild(questionDiv.firstChild);
}
// Clear the question after it's asked 

//
//	U S E R   R E S P O N S E
//
function getResponse() {
	// set month 
	monthGuess[count] = document.getElementById("month").value;
	dayGuess[count] = document.getElementById("day").value;

	for (var i = 0; i < markerPos.length; i++) {
		if (markerPos[i]["Month"] == monthGuess[count] &&
			markerPos[i]["Day"] == dayGuess[count]) {
			var x = markerPos[i]["x"];
			var y = markerPos[i]["y"];
			bluePin(x,y);

		}
	}
	// Found correct coordinates, create a pin
	
	// Pin the correct one
	var correctMonth = answers[randomIndex]["Month"];
	var correctDay = answers[randomIndex]["Day"];


	for (var j = 0; j < markerPos.length; j++) {
		if (markerPos[j]["Month"] == correctMonth &&
			markerPos[j]["Day"] == correctDay) {
			var x = markerPos[j]["x"];
			var y = markerPos[j]["y"];
			pinkPin(x,y);
		}
	}


	// increment the count
	count++;

	// delete current question
	deleteQuestion();
	// ask next question
	ask();
}

/*	if (monthGuess[count] == answers[randomIndex]["Month"]) {
		console.log("CORRECT MONTH!");
	}
	else if (monthGuess[count] == answers[randomIndex]["Month"] && day == answers[index]["Day"]) {
		console.log("AWESOMEEEE!");
	}
	else {
		console.log("BOOOOOO");
	}
*/










