<x-pos-layout title="POS">
    <div
        class="h-full grid grid-cols-1 lg:grid-cols-12 min-h-0"
        x-data="{
            payment: 'cash',
            customer: 'Walk-in Customer',
            search: '',
            category: 'all',
            invoiceDiscount: 0,
            paid: 0,
            cart: [
                { id: 1, name: 'Nitrile Gloves M', unit: 'Box', price: 120, qty: 2, discount: 0, prices: [120, 110, 100], units: ['Box', 'Pair'] },
                { id: 2, name: 'Surgical Mask', unit: 'Box', price: 85, qty: 1, discount: 5, prices: [85, 80, 75], units: ['Box', 'Piece'] },
            ],
            products: [
                { id: 1, name: 'Nitrile Gloves M', sku: 'SKU-1001', price: 120, category: 'consumables' },
                { id: 2, name: 'Surgical Mask', sku: 'SKU-1002', price: 85, category: 'consumables' },
                { id: 3, name: 'Diamond Bur Set', sku: 'SKU-2001', price: 450, category: 'equipment' },
                { id: 4, name: 'Composite Resin A2', sku: 'SKU-3001', price: 220, category: 'materials' },
                { id: 5, name: 'Alginate Powder', sku: 'SKU-3002', price: 95, category: 'materials' },
                { id: 6, name: 'Dental Mirror', sku: 'SKU-2002', price: 35, category: 'equipment' },
            ],
            get filtered() {
                return this.products.filter(p => {
                    const matchCat = this.category === 'all' || p.category === this.category;
                    const q = this.search.toLowerCase();
                    const matchQ = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
                    return matchCat && matchQ;
                });
            },
            get subtotal() {
                return this.cart.reduce((s, i) => s + (i.price * i.qty) - i.discount, 0);
            },
            get grandTotal() {
                return Math.max(0, this.subtotal - Number(this.invoiceDiscount || 0));
            },
            get remaining() {
                return Math.max(0, this.grandTotal - Number(this.paid || 0));
            },
            addProduct(p) {
                const existing = this.cart.find(i => i.id === p.id);
                if (existing) { existing.qty++; return; }
                this.cart.push({ id: p.id, name: p.name, unit: 'Box', price: p.price, qty: 1, discount: 0, prices: [p.price, p.price - 5, p.price - 10], units: ['Box', 'Piece'] });
            },
            removeLine(id) { this.cart = this.cart.filter(i => i.id !== id); },
            clearCart() { this.cart = []; this.paid = 0; this.invoiceDiscount = 0; }
        }"
        @keydown.window.slash.prevent="$refs.productSearch.focus()"
    >
        {{-- Left: catalog --}}
        <section class="lg:col-span-7 xl:col-span-8 flex flex-col min-h-0 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50">
            <div class="p-4 space-y-3 border-b border-slate-200 bg-white">
                <div class="flex flex-col sm:flex-row gap-2">
                    <div class="flex-1 relative" x-data="{ open: false }">
                        <x-ui.search placeholder="Search customer..." @focus="open = true" />
                        <div x-show="open" @click.outside="open = false" class="absolute z-20 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-soft py-1" style="display:none;">
                            <button type="button" class="w-full text-start px-3 py-2 text-sm hover:bg-slate-50" @click="customer = 'Dr. Sara Clinic'; open = false">Dr. Sara Clinic</button>
                            <button type="button" class="w-full text-start px-3 py-2 text-sm hover:bg-slate-50" @click="customer = 'Smile Dental'; open = false">Smile Dental</button>
                            <button type="button" class="w-full text-start px-3 py-2 text-sm hover:bg-slate-50" @click="customer = 'Walk-in Customer'; open = false">Walk-in Customer</button>
                        </div>
                    </div>
                    <x-ui.button variant="secondary" @click="$dispatch('open-modal', 'quick-customer')">
                        <x-ui.icon name="plus" class="w-4 h-4" /> Quick Add
                    </x-ui.button>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-xs text-slate-500">Customer:</span>
                    <x-ui.badge variant="primary" x-text="customer">Walk-in Customer</x-ui.badge>
                </div>
                <input
                    x-ref="productSearch"
                    x-model="search"
                    type="search"
                    placeholder="Search products (press /)..."
                    class="block w-full rounded-xl border-slate-200 bg-white text-base text-slate-800 shadow-sm placeholder:text-slate-400 ui-focus py-3"
                    autofocus
                />
                <div class="flex flex-wrap gap-2">
                    <template x-for="cat in [
                        { id: 'all', label: 'All' },
                        { id: 'consumables', label: 'Consumables' },
                        { id: 'equipment', label: 'Equipment' },
                        { id: 'materials', label: 'Materials' },
                    ]" :key="cat.id">
                        <button
                            type="button"
                            @click="category = cat.id"
                            class="px-3 py-1.5 rounded-xl text-sm font-medium ui-transition"
                            :class="category === cat.id ? 'bg-primary-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'"
                            x-text="cat.label"
                        ></button>
                    </template>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto p-4">
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                    <template x-for="p in filtered" :key="p.id">
                        <button
                            type="button"
                            @click="addProduct(p)"
                            class="text-start rounded-xl border border-slate-200 bg-white p-3 shadow-card hover:border-primary-300 hover:shadow-soft ui-transition focus:outline-none focus:ring-2 focus:ring-primary-500/40"
                        >
                            <p class="text-sm font-semibold text-slate-900 line-clamp-2" x-text="p.name"></p>
                            <p class="mt-1 text-xs text-slate-500" x-text="p.sku"></p>
                            <p class="mt-3 text-sm font-semibold text-primary-700" x-text="'EGP ' + p.price"></p>
                        </button>
                    </template>
                </div>
                <div x-show="filtered.length === 0" class="py-12">
                    <x-ui.empty-state title="No products" description="Try another search or category." />
                </div>
            </div>
        </section>

        {{-- Right: cart --}}
        <section class="lg:col-span-5 xl:col-span-4 flex flex-col min-h-0 bg-white">
            <div class="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <h2 class="text-base font-semibold text-slate-900">Cart</h2>
                <span class="text-xs text-slate-500" x-text="cart.length + ' items'"></span>
            </div>

            <div class="flex-1 overflow-y-auto p-3 space-y-2">
                <template x-for="item in cart" :key="item.id">
                    <div class="rounded-xl border border-slate-200 p-3 space-y-2">
                        <div class="flex items-start justify-between gap-2">
                            <p class="text-sm font-medium text-slate-900" x-text="item.name"></p>
                            <button type="button" class="text-slate-400 hover:text-danger-600" @click="removeLine(item.id)">
                                <x-ui.icon name="trash" class="w-4 h-4" />
                            </button>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <select class="rounded-lg border-slate-200 text-xs" x-model="item.unit">
                                <template x-for="u in item.units" :key="u"><option :value="u" x-text="u"></option></template>
                            </select>
                            <select class="rounded-lg border-slate-200 text-xs" x-model.number="item.price">
                                <template x-for="(pr, idx) in item.prices" :key="idx">
                                    <option :value="pr" x-text="'P' + (idx+1) + ' · ' + pr"></option>
                                </template>
                            </select>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <div class="inline-flex items-center rounded-lg border border-slate-200">
                                <button type="button" class="px-2 py-1 text-slate-600" @click="item.qty = Math.max(1, item.qty - 1)">−</button>
                                <span class="w-8 text-center text-sm" x-text="item.qty"></span>
                                <button type="button" class="px-2 py-1 text-slate-600" @click="item.qty++">+</button>
                            </div>
                            <input type="number" min="0" class="w-20 rounded-lg border-slate-200 text-xs py-1" x-model.number="item.discount" placeholder="Disc" />
                            <p class="text-sm font-semibold text-slate-900" x-text="'EGP ' + ((item.price * item.qty) - item.discount).toFixed(0)"></p>
                        </div>
                    </div>
                </template>
                <div x-show="cart.length === 0">
                    <x-ui.empty-state title="Cart is empty" description="Select products from the left to begin." icon="shopping-cart" />
                </div>
            </div>

            <div class="border-t border-slate-200 p-4 space-y-3 bg-slate-50/80">
                <div class="flex items-center justify-between gap-3">
                    <label class="text-sm text-slate-600">Invoice discount</label>
                    <input type="number" min="0" class="w-28 rounded-xl border-slate-200 text-sm" x-model.number="invoiceDiscount" />
                </div>
                <div class="space-y-1.5 text-sm">
                    <div class="flex justify-between text-slate-600"><span>Subtotal</span><span x-text="'EGP ' + subtotal.toFixed(0)"></span></div>
                    <div class="flex justify-between text-lg font-semibold text-slate-900"><span>Grand Total</span><span x-text="'EGP ' + grandTotal.toFixed(0)"></span></div>
                    <div class="flex items-center justify-between gap-3 pt-1">
                        <label class="text-slate-600">Paid</label>
                        <input type="number" min="0" class="w-28 rounded-xl border-slate-200 text-sm font-medium" x-model.number="paid" />
                    </div>
                    <div class="flex justify-between font-medium" :class="remaining > 0 ? 'text-warning-700' : 'text-success-700'">
                        <span>Remaining</span><span x-text="'EGP ' + remaining.toFixed(0)"></span>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <template x-for="m in [
                        { id: 'cash', label: 'Cash' },
                        { id: 'visa', label: 'Visa' },
                        { id: 'instapay', label: 'Instapay' },
                        { id: 'vodafone', label: 'Vodafone Cash' },
                    ]" :key="m.id">
                        <button
                            type="button"
                            @click="payment = m.id"
                            class="rounded-xl px-2 py-2.5 text-xs font-semibold border ui-transition"
                            :class="payment === m.id ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'"
                            x-text="m.label"
                        ></button>
                    </template>
                </div>

                <div class="grid grid-cols-1 gap-2 pt-1">
                    <x-ui.button size="lg" class="w-full" @click="$store.toast.show('Invoice saved (UI only)')">
                        Save Invoice
                    </x-ui.button>
                    <div class="grid grid-cols-2 gap-2">
                        <x-ui.button variant="secondary" class="w-full" @click="$store.toast.show('Print queued (UI only)')">
                            <x-ui.icon name="printer" class="w-4 h-4" /> Print
                        </x-ui.button>
                        <x-ui.button variant="ghost" class="w-full text-danger-600 hover:bg-danger-50" @click="$dispatch('open-modal', 'clear-cart')">
                            Clear Cart
                        </x-ui.button>
                    </div>
                </div>
            </div>
        </section>

        <x-ui.modal name="quick-customer" title="Quick Add Customer">
            <div class="space-y-4">
                <x-ui.input label="Name" placeholder="Customer name" />
                <x-ui.input label="Phone" placeholder="01xxxxxxxxx" />
            </div>
            <x-slot:footer>
                <x-ui.button variant="secondary" @click="$dispatch('close-modal', 'quick-customer')">Cancel</x-ui.button>
                <x-ui.button @click="customer = 'New Customer'; $dispatch('close-modal', 'quick-customer'); $store.toast.show('Customer added (UI only)')">Add</x-ui.button>
            </x-slot:footer>
        </x-ui.modal>

        <x-ui.confirmation-dialog name="clear-cart" title="Clear cart?" confirmLabel="Clear" variant="danger">
            Remove all items from the current cart? (UI only)
        </x-ui.confirmation-dialog>
        <div @confirmed.window="if ($event.detail === 'clear-cart') clearCart()"></div>
    </div>
</x-pos-layout>
