import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Row from '../../src/grid/row'
chai.use(sinonChai)

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
})