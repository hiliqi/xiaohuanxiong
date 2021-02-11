<?php


namespace app\service;

use app\model\Topic;
use Elasticsearch\ClientBuilder;

class TopicService
{
    private $client;

    // 构造函数
    public function __construct()
    {
        $host = config('search.es.host');
        $params = array(
            $host
        );
        $this->client = ClientBuilder::create()->setHosts($params)->build();
    }

    public function getPagedAdmin($where = '1=1')
    {
        $data = Topic::where($where);
        $page = config('page.back_end_page');
        $topics = $data->order('id', 'desc')
            ->paginate(
                [
                    'list_rows' => $page,
                    'query' => request()->param(),
                    'var_page' => 'page',
                ]);
        return [
            'topics' => $topics,
            'count' => $data->count()
        ];
    }

    // 查询文档 (分页，排序，权重，过滤)
    public function search($keywords, $index_name, $type_name, $from, $size)
    {
        $params = [
            'index' => $index_name,
            'type' => $type_name,
            'body' => [
                'query' => [
                    'bool' => [
                        'should' => [
                            ['match' =>
                                ['profile' =>
                                    [
                                        'query' => $keywords,
                                        'boost' => 3, // 权重大
                                    ]
                                ]
                            ]
                        ],
                    ],
                ],
                'sort' => ['id' => ['order' => 'desc']],
                'from' => $from,
                'size' => $size
            ]
        ];

        $results = $this->client->search($params);
        return $results;
    }

}