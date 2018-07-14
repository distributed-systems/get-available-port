'use strict';

import PortFinder from '../';
import section from 'section-tests';
import assert from 'assert';





section('Get Available Port', (section) => {

    section.test('get port', async() => {
        const finder = new PortFinder();
        const port = await finder.getPort();
        
        assert(port);
        assert(port >= 20000);
        assert(port <= 60000);
    });
});