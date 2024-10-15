let data = [
    {
        name: 'Azarin',
        fill: ['60ml'],
        price: 31000,
        stock: '10',
    },
    {
        name: 'Safi',
        fill: ['15ml'],
        price: 10000,
        stock: '15',
    },
    {
        name: 'Hadalabo',
        fill: ['25ml'],
        price:  25000,
        stock: '20',
    }
];

// Menampilkan semua data dalam format tabel
console.table(data);

// TODO 1: Dapatkan semua data dengan nama tertentu
const getDataByName = (name) => data.find(skincare => skincare.name === name);
console.log("Data dengan nama 'Safi':", getDataByName('Safi'));

// TODO 2: Dapatkan data dengan harga tertentu
const getDataByPrice = (price) => data.filter(skincare => skincare.price === price);
console.log("Data dengan harga '10000':", getDataByPrice('10000'));

// TODO 3: Dapatkan data dengan stock tertentu
const getDataByStock = (stock) => data.filter(skincare => skincare.stock === stock);
console.log("Data dengan stock 20:", getDataByStock(20));
