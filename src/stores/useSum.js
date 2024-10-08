import create from 'zustand';

const useSum = create((set) => ({
    rows: [
        { id: 1, barcode: 1111, product: 'Ice cream sandwich', quantity: 2, money: 60, cupon: 0, sum: 55 },
        { id: 2, barcode: 1112, product: 'Chocolate bar', quantity: 3, money: 30, cupon: 2, sum: 28 },
        { id: 3, barcode: 1113, product: 'Fruit yogurt', quantity: 1, money: 20, cupon: 3, sum: 17 },
        { id: 4, barcode: 1114, product: 'Potato chips', quantity: 5, money: 50, cupon: 10, sum: 40 },
        { id: 5, barcode: 1115, product: 'Soda can', quantity: 4, money: 40, cupon: 5, sum: 35 },
        { id: 6, barcode: 1116, product: 'Chocolate cookie', quantity: 3, money: 45, cupon: 5, sum: 40 },
        { id: 7, barcode: 1117, product: 'Milk carton', quantity: 6, money: 60, cupon: 10, sum: 50 },
        { id: 8, barcode: 1118, product: 'Energy drink', quantity: 2, money: 40, cupon: 3, sum: 37 },
        { id: 9, barcode: 1119, product: 'Gummy bears', quantity: 3, money: 30, cupon: 2, sum: 28 },
        { id: 10, barcode: 1120, product: 'Chocolate milk', quantity: 1, money: 25, cupon: 2, sum: 23 },
        { id: 11, barcode: 1121, product: 'Protein bar', quantity: 2, money: 50, cupon: 5, sum: 45 },
        { id: 12, barcode: 1122, product: 'Peanut butter', quantity: 1, money: 70, cupon: 10, sum: 60 },
        { id: 13, barcode: 1123, product: 'Granola', quantity: 3, money: 60, cupon: 5, sum: 55 },
        { id: 14, barcode: 1124, product: 'Cereal box', quantity: 1, money: 40, cupon: 5, sum: 35 },
        { id: 15, barcode: 1125, product: 'Instant noodles', quantity: 5, money: 50, cupon: 8, sum: 42 },
        { id: 16, barcode: 1126, product: 'Snack mix', quantity: 2, money: 35, cupon: 3, sum: 32 },
        { id: 17, barcode: 1127, product: 'Orange juice', quantity: 4, money: 80, cupon: 10, sum: 70 },
        { id: 18, barcode: 1128, product: 'Apple pie', quantity: 1, money: 30, cupon: 5, sum: 25 },
        { id: 19, barcode: 1129, product: 'Carrot cake', quantity: 2, money: 50, cupon: 7, sum: 43 },
        { id: 20, barcode: 1130, product: 'Cupcake', quantity: 3, money: 45, cupon: 6, sum: 39 },

    ],

    subtotal: 0,
    discount: 0,
    total: 0,
    calculateTotal: (rows) => set(() => {
        const subtotal = rows.reduce((acc, item) => acc + item.money, 0);
        const discount = rows.reduce((acc, item) => acc + item.cupon, 0);
        return { subtotal, discount, total: subtotal - discount };
    }),

    calSum: (id) => {
        const state = useSum.getState();
        const item = state.rows.find((row) => row.id === id);
        if (item) {
            return (item.money * item.quantity) - item.cupon;
        }
        return 0; // คืนค่า 0 หากไม่พบรายการ
    },
}));

export default useSum;
