import {describe , test ,expect, it} from '@jest/globals'
import { sum } from '..'

describe('testing sun function', () => {
   
            it('it shoud give cirrect answer',()=>{
                const finalResult=sum(3,2)
                expect(finalResult).toBe(5)
            })
  
})



