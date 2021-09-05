import { App } from './../src/classes/App';
describe('Pattern Adapter TDD', () => {
    
    it("should be return Je ne vole pas loin", () => {
        let app = new App()
        expect(app.main()).toBe("Je ne vole pas loin");
    })
})
