/*
 * @Author: Jolin 670618924@qq.com
 * @Date: 2024-11-08 22:49:13
 * @LastEditors: Jolin 670618924@qq.com
 * @LastEditTime: 2024-11-08 22:49:32
 * @FilePath: /pink-fe-spec/docs/.vuepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})