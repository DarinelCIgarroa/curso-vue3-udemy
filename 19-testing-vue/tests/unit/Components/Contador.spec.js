import { mount } from "@vue/test-utils";
import Contador from "@/components/Contador.vue";

describe("Contador.vue", () => {
    it("Validar msg", () => {
        const wrapper = mount(<Contador />);
        
        expect(wrapper.html()).toContain("Counter: 0") // BUsca elementos en el componente
        
        
    });
    it("Aumentar el contador en 1", async () => {
        const wrapper = mount(<Contador />);
        
        await wrapper.find("button.add").trigger('click');
        expect(wrapper.find("h1").text()).toBe("Counter: 1");
        
    });

    it("Disminuir el contador hasta -5", async () => {
        const wrapper = mount(<Contador />);

        await wrapper.find("button.dis").trigger("click");
        await wrapper.find("button.dis").trigger("click");
        await wrapper.find("button.dis").trigger("click");
        await wrapper.find("button.dis").trigger("click");
        await wrapper.find("button.dis").trigger("click");
        expect(wrapper.find("h1").text()).toBe("Counter: -5")
    });
    

     
})
