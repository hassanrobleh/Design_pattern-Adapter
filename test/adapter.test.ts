import { App } from './../src/classes/App';
describe('Pattern Adapter TDD', () => {
    
    let app = new App()
    it("should be return Je ne vole pas loin", () => {
        expect(app.dindon()).toBe("Je ne vole pas loin ");
    });

    it("should be return Je vole", () => {
        expect(app.canard()).toBe("Je vole");
    });

    it("should be return Je ne vole pas loin", () => {
        expect(app.adapterDindon()).toBe("Je ne vole pas loin Je ne vole pas loin Je ne vole pas loin Je ne vole pas loin Je ne vole pas loin ");
    });


})
