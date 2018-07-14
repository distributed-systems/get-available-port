# Get Available Port 

finds a random available port

```
import PortFinder from 'get-available-port';

const finder = new PortFinder({
    min: 80, // defaults to 20'000
    max: 100, // defaults to 60'000
});


const port = await finder.getPort(); // 91
