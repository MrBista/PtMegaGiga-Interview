import axios from 'axios';
import { defineStore } from 'pinia';
const baseUrl = import.meta.env.VITE_BASE_URL;
export const useAppStore = defineStore('app', {
  state: () => ({
    isLogin: true,
    isSupplier: true,
    stocks: [],
    pages: 0,
    suppliers: [],
    pageSupplier: 0,
    whichPage: 'stock',
  }),
  getters: {},
  actions: {
    loggedIn() {
      this.isLogin = true;
    },
    loggedOut() {
      this.isLogin = false;
    },
    async getAllStock(page) {
      let query = '/barang/find-all?limit=10';
      try {
        if (page) {
          query += '&offset=' + page;
        } else if (page < 1) {
          query += '&offset=1';
        } else {
          query += '&offset=1';
        }
        const { data } = await axios({
          url: baseUrl + query,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        });
        this.stocks = data;
        this.pages = data.total_page;
      } catch (err) {
        console.log(err);
      }
    },
    async getAllSupplier(page) {
      let query = '/supplier/find-all?limit=10';
      try {
        if (page) {
          query += '&offset=' + page;
        } else if (page < 1) {
          query += '&offset=1';
        } else {
          query += '&offset=1';
        }
        const { data } = await axios({
          url: baseUrl + query,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          },
        });
        this.suppliers = data;
        this.pageSupplier = data.total_page;
      } catch (err) {
        console.log(err);
      }
    },
    async addStock({ harga, id, namaBarang, stock, supplierName }) {
      try {
        // get supplier data
        console.log('ini stock', stock);
        const { data } = await axios.post(
          `${baseUrl}/barang/create`,
          {
            harga,
            id,
            namaBarang,
            stok: stock,
            supplier: {
              alamat: 'string',
              id: 0,
              namaSupplier: supplierName,
              noTelp: 'string',
            },
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            },
          }
        );
        console.log(data);
        if (data.status.toLowerCase() === 'ok') {
          this.router.push('/');
        }
      } catch (err) {
        console.log('conso', err);
      }
    },
    async updateStock(idStock, { harga, id, namaBarang, stock, supplierName }) {
      try {
        const { data } = await axios.put(
          baseUrl + '/barang/update/' + idStock,
          {
            harga,
            id,
            namaBarang,
            stok: stock,
            supplier: {
              alamat: 'string',
              id: 0,
              namaSupplier: supplierName,
              noTelp: 'string',
            },
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            },
          }
        );
        // console.log(data);
        if (data.status.toLowerCase() === 'ok') {
          this.router.push('/');
        }
      } catch (err) {
        console.log(err);
      }
    },

    async addSupplier({ alamat, namaSupplier, noTelp }) {
      try {
        const { data } = await axios.post(
          `${baseUrl}/supplier/create`,
          {
            alamat,
            namaSupplier,
            noTelp,
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            },
          }
        );
        console.log(data);
        if (data.status.toLowerCase() === 'ok') {
          this.router.push('/supplier');
        }
      } catch (err) {
        console.log('conso', err);
      }
    },

    async updateSupplier(idSupplier, { alamat, namaSupplier, noTelp }) {
      try {
        const { data } = await axios.put(
          `${baseUrl}/supplier/update/${idSupplier}`,
          {
            alamat,
            namaSupplier,
            noTelp,
          },
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            },
          }
        );
        console.log(data);
        if (data.status.toLowerCase() === 'ok') {
          this.router.push('/supplier');
        }
      } catch (err) {
        console.log('conso', err);
      }
    },
  },
});
