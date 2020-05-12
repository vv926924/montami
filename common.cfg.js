var axCommon = {
	action: {
		type: {
			main: {
				S1: [],
				B1: [],
				/*
				S: ['S1', 'S2', 'S3', 'S4'],
				B: ['B1', 'B2', 'B3', 'B4'],
				H: [],
				R: [],
				F: [],
				D: []
				*/
			},
			home: {
				S: ['S1', 'S2'],
				B: ['B1', 'B2']
			},
			job: {
				FT: [],
				PT: [],
				FL: [],
				TN: []
			}
		},
		name: {
			main: {
				S: {th: 'ขาย/ให้เช่า/แลก', en: 'Sell/ Rent/ Exchange'},
				// S1: {th: 'ขายปลีก', en: 'Sell'},
				S1: {th: 'ขาย/ให้เช่า/บริการ', en: 'Sell'},
				S2: {th: 'ขายส่ง', en: 'Wholesale Lots'},
				S3: {th: 'ให้เช่า', en: 'Rent'},
				S4: {th: 'แลก', en: 'Exchange'},
				B: {th: 'ซื้อ/ต้องการเช่า', en: 'Buy/ Want to rent'},
				// B1: {th: 'ซื้อปลีก', en: 'Buy'},
				B1: {th: 'ซื้อ/เช่า/หาบริการ', en: 'Buy'},
				B2: {th: 'ซื้อสินค้าขายส่ง', en: 'Buy Lots'},
				B3: {th: 'เช่า', en: 'Want to Rent'},
				B4: {th: 'แลก', en: 'Exchange'},
				H: {th: 'จ้าง', en: 'Hire'},
				R: {th: 'รับจ้าง/บริการ', en: 'Service'},
				F: {th: 'แฟรนไชส์', en: 'Francise'},
				D: {th: 'แจก', en: 'Give out'}
			},
			home: {
				S: {th: 'ขาย/ให้เช่า', en: 'Sell/ Rent'},
				S1: {th: 'ขาย', en: 'Sell'},
				S2: {th: 'ให้เช่า', en: 'Rent'},
				B: {th: 'ซื้อ/ต้องการเช่า', en: 'But/ Want to Rent'},
				B1: {th: 'ซื้อ', en: 'Buy'},
				B2: {th: 'ต้องการเช่า', en: 'Want to Rent'}
			},
			job: {
				FT: {th: 'Full Time', en: 'Full Time'},
				PT: {th: 'Part Time', en: 'Part Time'},
				FL: {th: 'Free Lance', en: 'Free Lance'},
				TN: {th: 'ฝึกงาน', en: 'Trainning'}
			}
		}
	},
	product_status: {
		type: {
			main: {
				N: [],
				U: []
			},
			job: {
				BD: [],
				MD: [],
				OT: []
			},
		},
		name: {
			main: {
				N: {th: 'ใหม่', en: 'New'}, 
				U: {th: 'มือสอง', en: 'Used'}
			},
			job: {
				BD: {th: 'ปริญญาตรี', en: 'Bachelor\'s Degree'},
				MD: {th: 'ปริญญาโทขึ้นไป', en: 'Master\'s Degree or higher'},
				OT: {th: 'ต่ำกว่าปริญญาตรี', en: 'Other Education Levels'}
			},
		}
	},
	seller_type: {
		type: {
			main: {
				I: [],
				C: []
			}
		},
		name: {
			main: {
				I: {th: 'บุคคล', en: 'Individual'}, 
				C: {th: 'ร้านค้า/บริษัท', en: 'Shop/ Company'}
			}
		}
	}
};