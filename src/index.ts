(() =>
  console.log({
    version: process.version,
    arch: process.arch,
    platform: process.platform,
    title: process.title,
    pid: process.pid,
    ppid: process.ppid,
    execPath: process.execPath,
    mainId: process.mainModule.id,
    mainFilename: process.mainModule.filename,
  }))();
