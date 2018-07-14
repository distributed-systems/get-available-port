'use strict';

import net from 'net';


export default class PortFinder {


    constructor({
        min = 20000,
        max = 60000,
    } = {}) {
        this.min = min;
        this.max = max;
    }




    /**
    * returns an available port
    */
    async getPort() {
        const port = this.getRandomPort();

        return await this.testPort(port).catch(() => {
            return this.getPort();
        });
    }




    /**
    * tests if a port is available
    */
    testPort(portNumber) {
        return new Promise((resolve, reject) => {
            const server = net.createServer();
        
            // make sure this server is not preventing 
            // the process form terminating
            server.unref();

            // nope, the port isn't available
            server.on('error', reject);

            // try to open the server
            server.listen({
                port: portNumber
            }, () => {

                // the port is available, close the server again
                server.close(() => resolve(portNumber));
            });
        });
    }



    /**
    * returns a random number between the set bounds
    */
    getRandomPort() {
        return Math.floor(Math.random()*(this.max-this.min))+this.min;
    }
}