class Component<TState extends object = {}> {
    // Состояние компонента, здесь будем держать дескрипторы
    state: TState = {};

    // Имя компонента для поиска шаблона и тега
    name: string;

    // Конкретный тег в разметке страницы, на месте которого должен появиться компонент
    targetElement: HTMLElement;

    // Здесь будем хранить элемент компонента
    private node: HTMLElement;

    // Для хранения всех ya-model
    private models: Array<string>;

    constructor(name: string, targetElement: HTMLElement) {
        this.name = name;
        this.targetElement = targetElement;

        // Описанные шаги
        this.prepareTemplate();
        this.prepareVariables();
        this.bindVariables();
        this.bindActions();
        this.render();
    }

    prepareTemplate(): void {}

    prepareVariables(): void {}

    bindVariables(): void {}

    bindActions(): void {}

    render(): void {}
}