class Cars {
    constructor (nopol,pemilik,kas) {
        this.nopol=nopol;
        this.pemilik=pemilik;
        this.kas=kas;
    }
}

class ParkingService {
    constructor (kapasitas) {
        this.kapasitas=kapasitas;
        this.sisa=kapasitas;
        this.cars=[];
    }

    park(car){
        if (this.sisa===0) {
            console.log(`kapasitas mobil sudah penuh`);
            return false;
        } else {
            for (let i = 0; i < this.cars.length; i++) {
                if (car.nopol===this.cars[i].nopol) {
                    console.log(`mobil dengan nomor ${this.cars[i].nopol} sudah diparkir, silahkan masukkan nomor polisi yang lain`);
                    return false
                }
            }
            this.cars.push(car);
            this.sisa = this.sisa-1
            console.log(`mobil berhasil diparkir! `);
        }

    }

    getAll() {
        if (this.cars.length != 0) {
            console.log('kendaraan yang terparkir: ');
            return this.cars
        }
        return (`parkir masih kosong`)
    }

    leave(nopol) {
        for (let i = 0; i < this.cars.lengths; i++) {
            if (nopol===this.cars[i].nopol) {
               this.cars.splice(i,1)
               console.log(`kendaraan sudah keluar1`);
               return 
            }
        }
        console.log(`no kendaraan tidak terdaftar`);
    }
    check() {
        console.log(`kapasitas parkir: ${this.kapasitas}`);
        console.log(`sisa parkir yang kosong:${this.sisa}`);
        console.log(`mobil yang sedang terparkir:${JSON.stringify(this.cars)}`);
    }
}


function main() {
    const parkingService = new ParkingService(3);
    parkingService.park(new Cars('B1234AA','irsalina',0))
    parkingService.park(new Cars('AD1234CC','astika',0))
    parkingService.park(new Cars('DE1234KK','usman',0))
    parkingService.park(new Cars('AD1245CC','dzikrur',0))
    let cekParkir = parkingService.getAll()
    console.log(cekParkir);
    parkingService.park(new Cars('AD1245CC','dzikrur',0))
    parkingService.leave('AD1245CC')
    console.log(parkingService.getAll());
    parkingService.check()
    // const delet = inventoryService.deleteData('M002');
    // console.log(books);
    // books = inventoryService.getAll();
    // console.log(books);
}

main();