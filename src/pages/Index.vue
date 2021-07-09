<template>
  <Layout>
  <div class="bg-splash bg-contain flex flex-col flex-grow overflow-hidden pt-12">
    <div class="container-inner mx-auto bg-white">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left mt-16 content-center">
        <div class="leading-tight whitespace-normal text-center min-w-max">Early Childhood Consultant</div>
      </div>
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div id="about" style="position: relative; top: -40px; left: 0"/>
      <div class="get-to-know-me container-inner mx-auto text-xl mb-32 relative mt-8  bg-white">
        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center">
          <div><g-image src="../../static/vanessa-pashkoff.jpg" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div>
          <div class="flex-1 text-lg sm:text-xl ml-6">Vanessa Pashkoff has been in the field of early childhood education for over 14 years. She has worn many hats during her time in the field including classroom teacher, After-school Program Director, trainer and facilitator and is passionate about family engagement, open-ended learning and anti-bias anti-racist teaching practices. Vanessa is also the Program Specialist at MAAEYC (Massachusetts Association for the Education of Young Children) in which she works to support MAAEYC programs, committees and events. Vanessa is passionate about early childhood education and is an advocate for play. Please contact <a href="mailto:vpashkoff@gmail.com">Vanessa Pashkoff</a> for more information and inquiries.</div>
        </div>
      </div> <!-- end get-to-know me -->
    </div>

    <div class="overflow-x-hidden">
      <div id="contact" style="position: relative; top: -40px; left: 0"/>
      <div class="contact-me bg-background-secondary pt-16">
        <div class="container-inner mx-auto text-xl pb-4 relative bg-white">
          <h2 class="font-bold mb-6">Contact me:</h2>

          <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>

          <p class="mb-12">Use this form to contact me for any educational or consulting needs.</p>

          <div class="text-lg sm:text-lg mb-16">
            <form action="https://formspree.io/f/xdoydqqq" method="POST" class="mb-12">
              <div class="flex flex-wrap mb-6 -mx-4">
                  <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                      <label class="block mb-2 text-copy-primary" for="name">
                          Name
                      </label>

                      <input type="text" name="name" id="name" placeholder="Jon Snow" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                  </div>

                  <div class="w-full px-4 md:w-1/2">
                      <label class="block text-copy-primary mb-2" for="email">
                          Email Address
                      </label>

                      <input type="email" name="email" id="email" placeholder="email@example.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                  </div>
              </div>

              <div class="w-full mb-12">
                  <label class="block text-copy-primary mb-2" for="message">
                      Message
                  </label>

                  <textarea id="message" rows="5" name="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4" placeholder="Enter your message here." required></textarea>
              </div>

              <div class="flex justify-end w-full">
                  <input type="submit" value="Submit" class="block bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
              </div>
          </form>
          </div>
        </div>
      </div> <!-- end contact-me -->
    </div>
  </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>
