import '@virtualpatterns/mablung-source-map-support/install';

async function main() {

  try {

    let module = await import('./default.js');
    let _default = module.default;

    // debugger

    console.dir(_default);

  } catch (error) {
    console.error(error);
  }

}

main();
//# sourceMappingURL=impy.js.map