import BankCard from '@/components/ui/BankCard';
import HeaderBox from '@/components/ui/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  // const accounts = await getAccounts({
  //   userId: loggedIn.$id
  // })
  const accounts = loggedIn ? await getAccounts({ userId: loggedIn.$id }) : null;
  
  return (
    <section className='flex'>
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities."
        />

        <div className="space-y-4">
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
            {accounts && accounts.data.map((a: Account) => (
              <BankCard
                key={accounts.id}
                account={a}
                userName={loggedIn?.firstName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanks
