const carName = "Hyundai Tucson"
let maxCarSpeed = 200
let CarOwner = "Car Owner"

let dataOptions = [carName, maxCarSpeed, CarOwner]

let maxCarSpeedValues = [160, 170, 220]
let carOwnerValues = ['Car Owner Ownerov', 'Car Ownerovich', 'Carov Owner Ownerovich']
for (let i = 0; i<=2; i++) {
    maxCarSpeed = maxCarSpeedValues[i]
    alert('У машины изменилась скорость. ' + maxCarSpeed)

    CarOwner = carOwnerValues[i]
    alert('У машины изменился владелец. Теперь это ' + CarOwner)
}

alert(maxCarSpeed)
alert(CarOwner)