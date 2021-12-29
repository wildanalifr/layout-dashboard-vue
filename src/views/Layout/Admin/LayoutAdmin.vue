<template>
  <div>
    <!-- Sidebar for Mobile -->
    <mobile-sidebar></mobile-sidebar>

    <!-- Static sidebar for desktop -->
    <desktop-sidebar></desktop-sidebar>

    <div class="md:pl-64 flex flex-col flex-1">
      <navbar></navbar>
      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <slot name="main"></slot>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { SearchIcon } from "@heroicons/vue/solid";

import MobileSidebar from "./MobileSidebar.vue";
import Navbar from "./Navbar.vue";
import DesktopSidebar from "./DesktopSidebar.vue";
</script>