import express, { Response } from 'express';
import NodeModel from '@/src/db/Node';
import sequelize from '../db';
import { GetRandomYoutubeIdsResponse } from '../common';

const app = express();

app.get('/randomYoutubeIds', async (req, res: Response<GetRandomYoutubeIdsResponse>) => {
  try {
    const rst = await NodeModel.findAll({ attributes: ['ytId'], order: sequelize.random(), limit: process.env.NUM_OF_IDS_PER_REQUEST });
    res.send({
      ids: rst.map((v) => v.ytId!),
    });
    res.end();
  } catch (e) {

  }
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`started on port ${process.env.SERVER_PORT}`);
});
