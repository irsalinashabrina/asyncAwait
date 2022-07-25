//let cars = [];
let kapasitas =0;
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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.sisa===0) {
                    console.log(`mohon maaf parkir penuh`);
                }
            }, 3000);
        })
        for (let i = 0; i < this.cars.length; i++) {
            if (car.nopol===this.cars[i].nopol) {
                console.log(`mobil dengan nomor ${this.cars[i].nopol} sudah diparkir, silahkan masukkan nomor polisi yang lain`);
                return false
            }
        }
        this.cars.push(car);
        this.sisa = this.sisa-1
        console.log(`mobil berhasil diparkir! `);
        //${this.kapasitas},${this.sisa},\n ${JSON.stringify(this.cars)}
        //console.log(`${this.kapasitas},${this.sisa},\n ${this.cars}`)
        //return this.cars
        //return console.log(`${this.kapasitas},${this.sisa},\n ${this.cars}`);
    }

    getAll() {
        if (this.cars.length != 0) {
            console.log('kendaraan yang terparkir: ');
            return this.cars
        }
        return (`parkir masih kosong`)
    }

    leave(nopol) {
        //let kuotaParkir1 = cars.length 
        for (let i = 0; i < this.cars.length; i++) {
            if (nopol===this.cars[i].nopol) {
               this.cars.splice(i,1)
               this.sisa++
               console.log(`kendaraan sudah keluar1`);
               //return this.cars
               return  console.log(`${this.kapasitas},${this.sisa},\n ${JSON.stringify(this.cars)}`);
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

parkingService = new ParkingService(3)

function Parkir(nopol,pemilik,keterangan) {
    //const parkingService = ParkingLot;
    let mobil = new Cars
    mobil.nopol=nopol
    mobil.pemilik=pemilik
    //console.log(parkingService);
    if (keterangan.toLowerCase()==='park') {
        console.log(parkingService.sisa);
        if (parkingService.sisa===0) {
            console.log(`maaf tempat parkir sudah penuh :( kendaraan tidak bisa diparkir`);
            return false
        } else {
            console.log('proses parkir sedang dilakukan...');
            setTimeout(()=>{
                parkingService.park(mobil)
                parkingService.check()
            },3000)
        }
    } else if (keterangan.toLowerCase()==='leave') {
        for (let i=0;i<=parkingService.cars.length;i++){
            if (mobil.nopol===parkingService.cars[i].nopol) {
                console.log(`maaf nomor polisi tersebut tidak terdaftar`);
            }
        }
        console.log('proses keluar sedang dilakukan...');
        setTimeout(()=>{
            parkingService.leave(mobil.nopol)
            parkingService.check()
        },1500)
    }
    // setTimeout((mobil)=>{

    // })
    // console.log(parkingService);
    // console.log('sisa='+parkingService.sisa);
    // console.log(parkingService.check());
    // parkingService.park(new Cars('B1234AA','irsalina',0))
    // parkingService.park(new Cars('AD1234CC','astika',0))
    // parkingService.park(new Cars('DE1234KK','usman',0))
    // parkingService.park(new Cars('AD1245CC','dzikrur',0))
    // let cekParkir = parkingService.getAll()
    // console.log(cekParkir);
    // parkingService.park(new Cars('AD1245CC','dzikrur',0))
    // parkingService.leave('AD1245CC')
    // console.log(parkingService.getAll());
    // console.log(parkingService.check());
    // const delet = inventoryService.deleteData('M002');
    // console.log(books);
    // books = inventoryService.getAll();
    // console.log(books);
}

//let mobil1=new Cars('B1234AA','irsalina',0)
Parkir('B1234AA','irsalina','park');
Parkir('AD1234CC','astika','park');
Parkir('DE1234KK','usman','park');
 Parkir('AD1245CC','dzikrur','park');



// function main() {
//     const parkingService = new ParkingService();
//     parkingService.park(new Cars('B1234AA','irsalina',0))
//     parkingService.park(new Cars('AD1234CC','astika',0))
//     parkingService.park(new Cars('DE1234KK','usman',0))
//     parkingService.park(new Cars('AD1245CC','dzikrur',0))
//     let cekParkir = parkingService.getAll()
//     console.log(cekParkir);
//     parkingService.park(new Cars('AD1245CC','dzikrur',0))
//     parkingService.leave('AD1245CC')
//     console.log(parkingService.getAll());
//     // const delet = inventoryService.deleteData('M002');
//     // console.log(books);
//     // books = inventoryService.getAll();
//     // console.log(books);
// }

// main();