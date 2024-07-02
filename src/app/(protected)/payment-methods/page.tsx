// import { CardAgents } from '@/components/dashboard/components/home/card-agents';
import * as RadixIcons from '@radix-ui/react-icons';

type Props = {
  custom: () => void;
};

// RadioGroup component
const RadioGroup = ({ defaultValue, children, className }) => (
  <div className={`space-y-2 ${className}`}>{children}</div>
);

const RadioGroupItem = ({ id, value }) => (
  <input type="radio" id={id} value={value} name="payment-option" />
);

// Label component
const Label = ({ htmlFor, children, className }) => (
  <label htmlFor={htmlFor} className={`flex items-center gap-3 w-full ${className}`}>
    {children}
  </label>
);

// Input component
const Input = ({ id, placeholder }) => (
  <input id={id} placeholder={placeholder} className="border border-gray-300 rounded-md p-2" />
);

// Button component
const Button = ({ children }) => (
  <button className="bg-blue-500 text-white rounded-md px-4 py-2">{children}</button>
);

const CardUI = () => {
  return (
    <div className="flex flex-col items-start p-5">
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          id="cardNumber"
          className="text-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Card number"
        />
        <RadixIcons.IdCardIcon className="text-gray-900" />
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <input
            type="text"
            id="expiry"
            className="rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="MM / YY"
          />
          <RadixIcons.CalendarIcon className="text-gray-900" />
        </div>
        <div className="flex items-center space-x-1">
          <input
            type="text"
            id="cvv"
            className="rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="CVV"
          />
          <RadixIcons.LockClosedIcon className="text-gray-900" />
        </div>
      </div>
      <p className="text-gray-500 mt-4 p-2 text-xs">
        Data is protected under the PCI DSS standard. We do not store your data and do not share it with the merchant.
      </p>
      <button className="bg-yellow-500 text-white w-[25%] mx-2 p-2 rounded-md mt-4">Pay</button>
    </div>
  );
};


function Page(props: Props) {
  return (
    <div className="grid md:grid-cols-1 gap-6 w-[60%] py-4 px-4 md:px-6">
      <div className="bg-white shadow-md dark:bg-gray-800 rounded-lg p-4">
        <div className="">
          <div className="flex items-center justify-between">
            <span className="font-semibold dark:text-gray-400">Order #123456789_123456789</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-3xl">00<span className="text-gray-500">$</span></span>
            <div className="flex items-center flex-col">
              <span className="font-sm">Description</span>
              <span className="text-gray-500 text-xs">Order Description</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold">Select a Payment Option</h2>
        <RadioGroup defaultValue="card" className="space-y-2">
          <div className="flex items-center gap-3">
            <RadioGroupItem id="card" value="card" />
            <Label htmlFor="card" className="flex items-center gap-3 w-full">
              <div className="flex-1">
                <div className="text-base">My Card</div>
              </div>
            </Label>
          </div>
          <img src="/card.png" alt="Card" className="w-auto" />
          <div className="flex items-center gap-3">
            <RadioGroupItem id="credit-card" value="credit-card" />
            <Label htmlFor="credit-card" className="flex items-center gap-3 w-full">
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-row">
                  <img src="/payment.png" alt="Card" className="h-6 w-auto" />
                  <div className="text-base font-bold">Credit or Debit Card(Visa/ Mastercard/ MIR)</div>
                </div>
                <div className="flex flex-row gap-3">
                  <img src="/Visa_MNP.png" alt="Card" className="h-6 w-auto" />
                </div>
              </div>
            </Label>
          </div>
          <CardUI />

          <div className="flex items-center gap-3">
            <RadioGroupItem id="bank-payment" value="bank-payment" />
            <Label htmlFor="bank-payment" className="flex items-center gap-3 w-full">
              <div className="flex justify-between w-full items-center">
                <div className="text-base font-bold">Online Bank Payment System</div>
                <div className="flex flex-row gap-3">
                  <img src="/bmo.png" alt="Card" className="h-10 w-auto" />
                  <img src="/Royal_Bank_of_Canada-Logo.wine 1.png" alt="Card" className="h-10 w-auto" />
                </div>

              </div>
            </Label>
          </div>
          <div className="text-gray-500 text-sm w-[65%] p-5">
            Convenient method of payment using YouMoney and Perfect Money payment system
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem id="apple-pay" value="apple-pay" />
            <Label htmlFor="apple-pay" className="flex items-center gap-3 w-full">
              <div className="flex justify-between w-full items-center">
                <div className="text-base font-bold">Apple Pay</div>
                <div className="flex flex-row gap-3">
                  <img src="/Apple Pay.png" alt="Card" className="h-10 w-auto" />
                </div>
              </div>
            </Label>
          </div>
          <div className="text-gray-500 text-sm w-[65%] p-5">
            Convenient method of payment using YouMoney and Perfect Money payment system
          </div>
          <div>
            <button className="bg-yellow-500 text-white w-[25%] mx-2 p-2 rounded-md mt-4">Continue</button>
            <div className="flex flex-row items-center flex-no-wrap mx-2">
              <RadixIcons.LockClosedIcon className="text-gray-900" />
              <p className="text-gray-500 mt-4 py-2 text-xs">
                Data is protected under the PCI DSS standard. We do not store your data and do not share it with the merchant.
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default Page;




// <div class="flex flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
//   <div class="flex flex-col gap-2">
//     <h1 class="text-2xl font-bold">Payment</h1>
//     <div class="flex flex-col gap-1 text-gray-500 dark:text-gray-400">
//       <div>Order #1234</div>
//       <div>$99.99</div>
//       <div>1 x Acme Widget</div>
//     </div>
//   </div>
//   <div class="grid gap-6">
//     <div class="grid gap-2">
//       <div class="flex items-center gap-2 rounded-md border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           class="h-6 w-6"
//         >
//           <rect width="20" height="14" x="2" y="5" rx="2"></rect>
//           <line x1="2" x2="22" y1="10" y2="10"></line>
//         </svg>
//         <div class="flex-1">My Card</div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           class="h-5 w-5 text-gray-500 dark:text-gray-400"
//         >
//           <path d="m9 18 6-6-6-6"></path>
//         </svg>
//       </div>
//       <div class="grid gap-4">
//         <div class="grid gap-2">
//           <label
//             class="text-sm text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             for="card-number"
//           >
//             Card number
//           </label>
//           <input
//             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             id="card-number"
//             placeholder="4111 1111 1111 1111"
//             type="text"
//           />
//         </div>
//         <div class="grid grid-cols-2 gap-4">
//           <div class="grid gap-2">
//             <label
//               class="text-sm text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               for="expiry-date"
//             >
//               Expiry date
//             </label>
//             <div class="grid grid-cols-2 gap-2">
//               <button
//                 type="button"
//                 role="combobox"
//                 aria-controls="radix-:r2:"
//                 aria-expanded="false"
//                 aria-autocomplete="none"
//                 dir="ltr"
//                 data-state="closed"
//                 data-placeholder=""
//                 class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                 id="expiry-month"
//                 aria-label="Month"
//               >
//                 <span style="pointer-events: none;">MM</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="lucide lucide-chevron-down h-4 w-4 opacity-50"
//                   aria-hidden="true"
//                 >
//                   <path d="m6 9 6 6 6-6"></path>
//                 </svg>
//               </button>
//               <button
//                 type="button"
//                 role="combobox"
//                 aria-controls="radix-:rf:"
//                 aria-expanded="false"
//                 aria-autocomplete="none"
//                 dir="ltr"
//                 data-state="closed"
//                 data-placeholder=""
//                 class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                 id="expiry-year"
//                 aria-label="Year"
//               >
//                 <span style="pointer-events: none;">YY</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="lucide lucide-chevron-down h-4 w-4 opacity-50"
//                   aria-hidden="true"
//                 >
//                   <path d="m6 9 6 6 6-6"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div class="grid gap-2">
//             <label
//               class="text-sm text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               for="cvc"
//             >
//               CVC
//             </label>
//             <input
//               class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//               id="cvc"
//               placeholder="123"
//               type="text"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="grid gap-2">
//       <div class="flex items-center gap-2 rounded-md border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           class="h-6 w-6"
//         >
//           <rect width="20" height="12" x="2" y="6" rx="2"></rect>
//           <circle cx="12" cy="12" r="2"></circle>
//           <path d="M6 12h.01M18 12h.01"></path>
//         </svg>
//         <div class="flex-1">Online Bank Payment System</div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           class="h-5 w-5 text-gray-500 dark:text-gray-400"
//         >
//           <path d="m9 18 6-6-6-6"></path>
//         </svg>
//       </div>
//       <div class="flex items-center gap-2 rounded-md border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           class="h-6 w-6"
//         >
//           <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
//           <path d="M10 2c1 .5 2 2 2 5"></path>
//         </svg>
//         <div class="flex-1">Apple Pay</div>
//       </div>
//     </div>
//   </div>
// </div>