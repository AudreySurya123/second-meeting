function checkArrayTypes(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        console.log("Ini adalah string");
      } else if (typeof arr[i] === 'number') {
        console.log("Ini adalah number");
      } else if (typeof arr[i] === 'object') {
        console.log("Ini adalah object");
      }
    }
  }

  // Contoh pemanggilan function dengan parameter array
  const array = [1, 2, 3, "Pemrograman Web", {
    "matkul": "Pemweb",
    "kampus": "UNS"
  }];

  checkArrayTypes(array);
