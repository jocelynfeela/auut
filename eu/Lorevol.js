p = init || _.modified(Forces, i) ? getForce(f[i]) : pulse && modified(f[i], pulse) ? sim.force(name) : null;
