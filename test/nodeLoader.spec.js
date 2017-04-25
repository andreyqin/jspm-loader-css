import chai, { expect } from "chai";
import chaiFs from "chai-fs";
chai.use(chaiFs);

import SystemJSBuilder from "systemjs-builder";

import rimraf from "rimraf";

describe("nodeLoader", function() {
  lazy('destDir', () => 'tmp/');

  beforeEach(function() {
    rimraf.sync(this.destDir);
  });

  lazy("builder", function() {
    return new SystemJSBuilder("test/example", "test/example/jspm.config.js");
  });

  context('when bundling', function() {
    lazy('outfile', function() {
      return `${this.destDir}/bundle.js`;
    });
    it('includes exported tokens', async function() {
      this.timeout(25000);
      await this.builder.bundle('app.js', this.outfile);
      expect('tmp/bundle.js').to.be.a.file().with.contents.that.match(/app\/app.css/);
    });
  });

});