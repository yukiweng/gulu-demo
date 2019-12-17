import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Collapse from '../../src/collapse/collapse'
chai.use(sinonChai)

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.exist
    })
})