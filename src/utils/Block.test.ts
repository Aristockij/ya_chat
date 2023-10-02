import esmock from 'esmock';
import { describe, before, it } from 'mocha';
import {expect} from 'chai';
import sinon from 'sinon';
import type BlockType from './Block.ts'

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake(),
}


describe('Block',  () => {

    let Block;
    let ComponentMock;

    before( async () => {
        const { default: ImportedBlock } =  await esmock('./Block', {
            './EventBus.ts': {
                EventBus: class {
                    emit = eventBusMock.emit;
                    on = eventBusMock.on;
                }
            }
        }) as { default: typeof BlockType };

        Block = ImportedBlock;
        ComponentMock = class extends Block {
            render(){
                const fragment: DocumentFragment = new DocumentFragment();

                fragment.append(document.createElement('div'));

                return fragment;
            }
        };
    })

    it('эмитится событие init',   () => {
        new ComponentMock({});

        expect(eventBusMock.emit.calledWith('init')).to.eq(true);
    });

    it('эмитится событие CDU ',   () => {
        const component = new ComponentMock({});

        component.setProps({test: 'test'})

        expect(eventBusMock.emit.calledWith('flow:component-did-update')).to.eq(true);
    });
});
