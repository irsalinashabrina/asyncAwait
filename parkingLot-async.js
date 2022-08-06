//let cars = [];
let kapasitas =0;
class Cars {
    constructor (nopol,pemilik,kas) {
        this.nopol=nopol;
        this.pemilik=pemilik;
    }
}

class ParkingService {
    constructor (kapasitas) {
        this.kapasitas=kapasitas;
        this.sisa=kapasitas;
        this.cars=[];
    }

    park(car){
        for (let i = 0; i < this.cars.length; i++) {
            if (car.nopol===this.cars[i].nopol) {
                console.log(`mobil ${this.cars[i].pemilik} dengan nomor ${this.cars[i].nopol} sudah diparkir, silahkan masukkan nomor polisi yang lain`);
                return false
            }
        }
        this.cars.push(car);
        this.sisa = this.sisa-1
        console.log(`mobil berhasil diparkir! `);
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
               console.log(`kendaraan sudah keluar`);
               //return this.cars
               //return  console.log(`${this.kapasitas},${this.sisa},\n ${JSON.stringify(this.cars)}`);
            }
        }
        //console.log(`no kendaraan tidak terdaftar`);
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
        if (parkingService.sisa===0) {
            console.log(`maaf tempat parkir sudah penuh :( kendaraan tidak bisa diparkir`);
            return false
        } else {
            console.log('proses parkir sedang dilakukan...');
            return new Promise(resolve => {
                setTimeout(()=>{
                    parkingService.park(mobil)
                    parkingService.check()
                    resolve()
                },3000)
            })
        }
    } else if (keterangan.toLowerCase()==='leave') {
        for (let i=0;i<=parkingService.cars.length;i++){
            console.log(mobil.nopol);
            if (mobil.nopol===parkingService.cars[i].nopol) {
                console.log(mobil.nopol);
                console.log('proses keluar sedang dilakukan...');
                return new Promise(resolve => {
                    setTimeout(()=>{
                        parkingService.leave(mobil.nopol)
                        parkingService.check()
                        resolve()
                    },1500)
                })

            }
        }
        console.log(`maaf nomor polisi tersebut tidak terdaftar`);   
    }
}

(async function(){
    await Parkir('BE001','Alex','park');
    await Parkir('AD1234CC','astika','park');
    await Parkir('DE1234KK','usman','park');
    await Parkir('AD1245CC','dzikrur','park');
    await Parkir('DE1234KK','usman','leave');
    await Parkir('AD1234CC','astika','leave');
    await Parkir('BE001','Alex','park');
})()


